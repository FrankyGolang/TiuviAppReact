let recognition  = undefined
let error        = undefined
const messages   = []

const rctMsg     = []

let start        = false
let end          = true

try {
    recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();

  } catch (errorApi) {
   
    error = errorApi
  }


export const sListener = {

    Recognition: recognition,

    SetLang(lang){
        recognition.lang = lang;
    },
    SetContinuous(bool){
        recognition.continuous = bool;
    },
    SetInterim(bool){
        recognition.interimResults = bool;
    },
    SetMaxAlternatives(int){
        recognition.maxAlternatives = int;
    },
    Starter(){

      return start
    },
    Ender(){
       return end
    },
    getMessages: messages,

    async Listener(){

        if (start || !end){
            return false
        }
   
        //Inicia el servicio de reconocimiento de voz escuchando el audio entrante 
        //con la intención de reconocer las gramáticas asociadas con el archivo 
        //SpeechRecognition.
        recognition.start();

        if (!sListener.Starter()){

            let x = 0
            while(!sListener.Starter() && x < 20){

                await new Promise(r => setTimeout(r, 100));
                x++
            }

           
            if (!sListener.Starter()){

                return false
            }

            return true
        }

    },

    waiting: [],


    Close(){

        if (!start || end){
            return
        }
   
        recognition.stop()
        //recognition.abort()
    },

    error: error,

    async Recogniter(){


  
          
        if (sListener.error !== undefined ){

            console.log(sListener.error)
            return false
        }
        
       const startRecognition = await sListener.Listener()
        if(!startRecognition){
            return false
        }
 

        
        const idInterval = setInterval(() =>{

            if (sListener.Ender()){

                clearInterval(idInterval)
            }

            if (sListener.getMessages.length === 0){

                if (sListener.waiting.length === 16 ){
             
                    sListener.Close()
                    clearInterval(idInterval)
                }

                sListener.waiting.push(0)
            }

            if (sListener.getMessages.length > 0){

                rctMsg.push(sListener.getMessages[0]) 
                sListener.getMessages.shift()

                if ( sListener.waiting.length !== 0 ){
                    sListener.waiting = []
                }

            }

         }, 250,);
 
       return true
    },

    async Results(){
        
        await new Promise(r => setTimeout(r, 250));
        return rctMsg.join("")
    }
}

if (recognition !== undefined){

    //Devuelve y establece el idioma del actual SpeechRecognition. 
    //Si no se especifica, se establece de forma predeterminada el langvalor 
    //del atributo HTML o la configuración de idioma del agente de usuario si
    // tampoco está configurada.
    sListener.SetLang("es-ES");

    //Controla si se devuelven resultados continuos para cada reconocimiento
    // o solo un único resultado. El valor predeterminado es único ( false.)
    sListener.SetContinuous(true);

    //Controla si los resultados provisionales deben devolverse ( true) o no ( false.) 
    sListener.SetInterim(false)

    //Un número que representa las alternativas máximas devueltas para cada resultado.
    sListener.SetMaxAlternatives(1)


    //Se activa cuando el agente de usuario ha comenzado a capturar audio.
    // También disponible a través de la onaudiostartpropiedad.
  
    recognition.onstart = () => {
     
        while( rctMsg.length !== 0){
            rctMsg.pop();
        }

        while( messages.length !== 0){
            messages.pop();
        }

        start = true
        end   = false  
    };

    // Se activa cuando el servicio de reconocimiento de voz se ha desconectado. 
    // También disponible a través de la onendpropiedad.
 
    recognition.onend = () => {
    
        start = false
        end   = true   

    };

    //Se activa cuando el servicio de reconocimiento de voz devuelve un resultado:
    // una palabra o frase ha sido reconocida positivamente y esto se ha comunicado 
    //a la aplicación. También disponible a través de la onresultpropiedad.


    recognition.onresult = (event) => {

        console.log(event)

        const results = event.results
        const length  = event.results.length - 1
        const final   = event.results[length].isFinal


        if(final === true){
        
            messages.push(results[length][0].transcript)

        }
    
    };


    //Se activa cuando se produce un error de reconocimiento de voz.
    // También disponible a través de la onerrorpropiedad.
    recognition.onerror = (event) => {

        console.error(event);
        error = event
    };


}



