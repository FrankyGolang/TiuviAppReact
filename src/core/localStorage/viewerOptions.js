'use-strict'
import cLS from "../callLocalStorage";
import timeunix from '../timeunix.js'
import { global, useGlobalContext } from '../options.js';
import { useEffect } from "react";

//Tiempos de acceso proximamento api al server.
const timeViewerMax = timeunix.minutes(60) 
const newTimeAccess = timeunix.hours(10)

//viewerOptionDefault
//Objeto privado que se almacena en el LocalStorage y son los valores que controlan el acceso
const vOD = {
    
    access: false,
    timeViewer: timeViewerMax,
    endViewer: 0,

}

//Funciones para manejar el localStorage
const store = {

    //Esta variable sirve para que el localStorage se sincronice una vez.
    init: false,

    //Esta variable guarda el ultimo mensaje recibido.
    lastMessage: null,

    //Recupera los valores actuales en el localStorage y las sincroniza con el objeto
    syncViewer: function(){

        if (this.init === true){
            return
        }

        let viewerOptions = cLS.getObject('viewerOptions');

        if (viewerOptions !== null){

            vOD.access = cLS.tBoolean(viewerOptions.access)
            vOD.timeViewer = cLS.tNumber(viewerOptions.timeViewer) 
            vOD.endViewer = cLS.tNumber(viewerOptions.endViewer) 

        } 

        if (viewerOptions === null ||
             vOD.access === null || 
             vOD.timeViewer === null || 
             vOD.endViewer === null) {

            cLS.setObjectDefer('viewerOptions', vOD);
        }

        this.init = true

    },

    //Sincroniza los valores actuales con el localStorage de forma asincrona
    syncViewerToStore: () => {

        cLS.setObjectDefer('viewerOptions', vOD);
    },

    //Actualiza una unica key de forma asincrona.
    setKeyViewer: (keyViewer, value) => {

        vOD[keyViewer] = value
        cLS.setObjectDefer('viewerOptions', vOD)

    },
}


//Componente que se renderiza cuando el acceso es verdadero.
function AccessViewer(){

    const globalContext = useGlobalContext();

    useEffect(() => {
    
        vOD.endViewer = Date.now();
        store.setKeyViewer('endViewer', vOD.endViewer);

       let idCounterAccessDown = setInterval(() => {

            vOD.timeViewer = vOD.timeViewer -5;
            store.setKeyViewer('timeViewer', vOD.timeViewer)

            if (vOD.timeViewer === 5){

                globalContext.setMessage('Te quedan menos de ' + timeunix.timeunixLabel(vOD.timeViewer))
          
            }

            if (vOD.timeViewer <= 0){
                stopAccess()
            }

        },5000)

        function stopAccess(){
            
            if (idCounterAccessDown !== null){

                clearInterval(idCounterAccessDown);
                idCounterAccessDown = null

                vOD.endViewer = Date.now();
                vOD.access = false;
                store.syncViewerToStore()
            }
    
            globalContext.accessViewer(false)
        }

        return () => { stopAccess() };

      }, [(vOD.timeViewer <= 0)]);


      return null
}

//Componente que se renderiza cuando el acceso es falso.
function NoAccessViewer(){

    const globalContext = useGlobalContext();

    // Crear un efecto aqui.
    if (store.lastMessage !== null){
        globalContext.setMessage(store.lastMessage)
        store.lastMessage = null
    }


    return null
}

const viewerOptions = {
   
    //Verifica el acceso actual dentro del estado de globalContext.accessViewer
    haveAccess: function(appAccess){

        //Sincroniza el localStorage
        store.syncViewer()

        if (appAccess === true){
           
            vOD.access = appAccess
            store.setKeyViewer('access', vOD.access)
        }
   
        //Variables de acceso
        if (vOD.access !== true){

            vOD.access = false
            store.setKeyViewer('access', vOD.access )
        } 


        //Comprobando que no se haya modificado el tiempo de visualizacion
        let newAccess = timeunix.addSeconds(vOD.endViewer, newTimeAccess)

        if (newAccess === null || vOD.timeViewer > timeViewerMax){

            vOD.endViewer = Date.now()
            newAccess = timeunix.addSeconds(vOD.endViewer, newTimeAccess)
            vOD.access = false
            vOD.timeViewer = 0
          
            store.syncViewerToStore()
            store.lastMessage = 'Quedan '+ timeunix.timeunixLabel(newTimeAccess) + ' para el proximo acceso gratuito.'

        }


        //Restablecimiento del acceso
        if (vOD.timeViewer <= 0 &&  Date.now() > newAccess){

            vOD.timeViewer = timeViewerMax
            store.setKeyViewer('timeViewer', timeViewerMax)
            store.lastMessage = 'Tu tiempo de acceso se ha restablecido.'
        } 
        
        //Perdida del acceso
        if (vOD.timeViewer <= 0){
           
            vOD.access = false
            store.setKeyViewer('access', vOD.access)
                        
            const nextAccess = newTimeAccess - Math.round((Date.now() - vOD.endViewer) / 1000)
            store.lastMessage = 'Has consumido tu tiempo de acceso, quedan '+ timeunix.timeunixLabel(nextAccess) + ' para el proximo acceso gratuito.'

        }


        return vOD.access
    },

    //Componente en App que da acceso o quita el acceso dependiendo de si el usuario tiene acceso.
    ViewerShadow: function (){

        const globalContext = useGlobalContext();

        const access = globalContext.viewerOptions.haveAccess()
       
        if (access === true){
    
            return(<AccessViewer />)
        }else{

            return(<NoAccessViewer />)
        }
   
    },


    access: () => vOD.access,
    timeViewer: () => vOD.timeViewer,
    endViewer: () => vOD.endViewer,
    
}

export default viewerOptions;