'use-strict'
import React, { useState } from 'react';
//App contexto, tema y css
import { cTheme } from './core/theme.js'
import { ThemeProvider } from '@mui/material/styles';
import { GlobalContext , global} from './core/options.js'
import CssBaseline from '@mui/material/CssBaseline';

import SelectPanel from './core/selectpanel.js'

//Proximamente login
import FormReact from './core/FormReact.js';







export default function App() {



  const [mode, setMode] = useState(global.mode);
  global.toggleTheme = () => {

    setMode(() => {

      global.mode = global.mode === "light" ? "dark" : "light"
      localStorage.setItem('themeMode', global.mode);
      return global.mode
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


  const [menu, setMenu] = React.useState(global.menu);
  global.selectMenu = (event, newValue)  => {
    global.menu = newValue
    localStorage.setItem('menu', newValue);
    setMenu(newValue)
  }

  //Añadir select menus a navigation
  const [menusActive , selectMenus] = React.useState(global.menusActive);
  global.selectMenusActive = (event, newValue)  => {



  }


  const [navValue, setNavigation] = React.useState(global.navigation);
  global.selectNavigation = (event, newValue)  => {

    global.navigation = newValue
    localStorage.setItem('navigation', newValue);
    setNavigation(newValue)
  }






  return (

<GlobalContext.Provider value={global}>
    <ThemeProvider theme={cTheme[global.mode]}>
      <CssBaseline  enableColorScheme />

      <SelectPanel />
     
    </ThemeProvider>
    </GlobalContext.Provider>

  );
}


