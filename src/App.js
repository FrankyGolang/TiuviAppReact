'use-strict'
import FormReact from './core/FormReact.js';

//Contexto Global
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


import HearingIcon from '@mui/icons-material/Hearing';
import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';

import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

//App component imports
import { CTheme } from './core/theme.js'
import { ThemeProvider } from '@mui/material/styles';

import { GlobalContext , Global} from './core/options.js'

import React, { useContext , useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';


//Tipografias
import { Mark, Em, U, A } from './core/typography.js'








function ToggleButton(props){

  const Global = useContext(GlobalContext);


  return(
    <IconButton sx={{ ml: 1 }}  
    color={Global.toggleTheme === "on" ?  "buttonActive": "buttonActive"} 
    onClick={Global.toggleTheme}>
    {Global.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>
  )
}

function ToggleButtonVoicer(props){

  const Global = useContext(GlobalContext);


  return(
    <IconButton sx={{ ml: 1 }}  
    color={Global.Voice === "on" ?  "buttonActive": "buttonInactive"} 
    onClick={Global.toggleVoice}>
      {Global.Voice === "on" ? <HearingIcon /> : <HearingDisabledIcon />}
  </IconButton>
  )
}

function ToggleButtonRecognition (props){

  const Global = useContext(GlobalContext);

  return(
    <IconButton sx={{ ml: 1 }}  
    color={Global.recognition === "on" ?  "buttonActive": "buttonInactive"}
    onClick={Global.toggleRecognition}>
      {Global.recognition === "on" ? <MicIcon /> : <MicOffIcon />}
  </IconButton>
  )
}

export default function App() {


  const [mode, setMode] = useState(Global.mode);
  Global.toggleTheme = () => {

    setMode(() => {

      Global.mode = Global.mode === "light" ? "dark" : "light"
      localStorage.setItem('themeMode', Global.mode);
      return Global.mode
    })
  }

  const [Voice, setVoice] = useState(Global.Voice);
  Global.toggleVoice = () => {

    setVoice(() => {

      Global.Voice = Global.Voice === "on" ? "off" : "on"
      localStorage.setItem('Voice', Global.Voice);
      return Global.Voice
    })
  }
  
  const [recognition, setRecognition] = useState(Global.recognition);
  Global.toggleRecognition = () => {

    setRecognition(() => {

      Global.recognition = Global.recognition === "on" ? "off" : "on"
      localStorage.setItem('recognition', Global.recognition);
      return Global.recognition
    })
  }

  

  return (

<GlobalContext.Provider value={Global}>

    <ThemeProvider theme={CTheme[Global.mode]}>
      <CssBaseline  enableColorScheme />



        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
        

          }}
        >

          <ToggleButton />
          <ToggleButtonVoicer/>
          <ToggleButtonRecognition/>

          <Mark >Provando nuevo mark</Mark>
          <Em >Provando nuevo Em</Em>
          <U  >Provando nuevo U</U>
          <A >Provando nuevo U</A>


          <FormReact />

        </Box>


    
    </ThemeProvider>
    </GlobalContext.Provider>

  );
}


