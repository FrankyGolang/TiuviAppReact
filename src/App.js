'use-strict'
import React, { useState } from 'react';
//App contexto, tema y css
import { cTheme } from './core/theme.js'
import { ThemeProvider } from '@mui/material/styles';
import { GlobalContext , global} from './core/options.js'
import CssBaseline from '@mui/material/CssBaseline';

import SelectPanel from './core/selectpanel.js'

//Alertas
import { AlertsGlobal } from './core/typography.js'
//Proximamente login
import FormReact from './core/FormReact.js';

import { ViewerButton } from './core/viewer.js'



const ViewerShadow = global.viewerOptions.ViewerShadow

const  messageSend = []

export default function App() {



  const [mode, setMode] = useState(global.userOptions.getMode());
  global.toggleTheme = () => {

    setMode(() => {

      if( mode === "light"){
        global.userOptions.setMode("dark")
        return "dark"
      } else {
        global.userOptions.setMode("light")
        return "light"
      }
 
    })
  }

  const [Voice, setVoice] = useState(global.voice);
  global.toggleVoice = () => {

    setVoice(() => {

      global.voice = global.voice === "on" ? "off" : "on"
      localStorage.setItem('voice', global.voice);
      return global.voice
    })
  }
  
  const [recognition, setRecognition] = useState(global.recognition);
  global.toggleRecognition = () => {

    setRecognition(() => {

      global.recognition = global.recognition === "on" ? "off" : "on"
      localStorage.setItem('recognition', global.recognition);
      return global.recognition
    })
  }


  const [menu, setMenu] = useState(global.menu);
  global.selectMenu = (event, newValue)  => {
    global.menu = newValue
    localStorage.setItem('menu', newValue);
    setMenu(newValue)
  }

  //Añadir select menus a navigation
  const [panel , setPanel] = useState(global.panel);
  const [navValue, setNavigation] = React.useState(global.navigation);
  global.selectNavigation = (event, newValue)  => {

    if(global.isPanel(newValue)) {

      if(global.panel !== newValue){

        global.panel = newValue
        localStorage.setItem('panel', newValue);
        setPanel(newValue)

      }
    }
    

    global.navigation = newValue
    localStorage.setItem('navigation', newValue);
    setNavigation(newValue)
  }

  const [token, setToken] = useState(global.token);
  global.setToken = (event , newValue)  => {

    global.token = newValue
    setToken(newValue)
  }



function isMensageRepeat(newValue){

  console.log(messageSend)
  console.log(newValue)

    const found = messageSend.find(element => element === newValue);
    if (found !== undefined){
        return true
    }

    messageSend.push(newValue);
    return false
}


  const [message, setMessage] = useState(global.message);
  global.setMessage = (newValue)  => {

 
    if(newValue === null){
      return
    }

    if (newValue === "delete"){
      setMessage(prevState => {
        prevState.shift();
        return [...prevState];
      })
      return
    }

    if (typeof newValue === 'string'){

      if( isMensageRepeat(newValue) ) {
        return
      }

      setMessage(prevState => {
        return [ {  
          message: newValue , 
      }, ...prevState];
      })
      return
    }

    if (typeof newValue === 'object'){

      if( isMensageRepeat(newValue.message) ) {
        return
      }

      setMessage(prevState => {
        return [ newValue , ...prevState];
      })
    }


  }

  const [accessViewer, setAccessViewer] = useState(global.viewerOptions.haveAccess());
  global.accessViewer = (swichViewer) => {

    setAccessViewer(() => global.viewerOptions.haveAccess(swichViewer))
    
  }





  return (

<GlobalContext.Provider value={global}>
    <ThemeProvider theme={cTheme[mode]}>
      <CssBaseline  enableColorScheme />

     
      <AlertsGlobal message={message.at(0)} />

      <ViewerShadow />

      {token !== "null" || accessViewer === true ? <SelectPanel /> : <>
        <FormReact />
      <ViewerButton />
      </>}
      
    </ThemeProvider>
    </GlobalContext.Provider>

  );
}


