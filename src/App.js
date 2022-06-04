'use-strict'
import FormReact from './core/FormReact.js';

//Contexto Global
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


import HearingIcon from '@mui/icons-material/Hearing';
import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';

//App component imports
import { CTheme } from './core/theme.js'
import { ThemeProvider } from '@mui/material/styles';

import { GlobalContext , Global} from './core/options.js'

import React, { useContext , useState } from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import Box from '@mui/material/Box';


//Tipografias
import { Mark, Em, U, A } from './core/typography.js'








function ToggleButton(props){

  const Global = useContext(GlobalContext);


  return(
    <IconButton sx={{ ml: 1 }}  color="inherit" onClick={Global.toggleTheme}>
    {Global.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>
  )
}

function ToggleButtonVoicer(props){

  const Global = useContext(GlobalContext);


  return(
    <IconButton sx={{ ml: 1 }}  color="inherit" onClick={Global.toggleVoice}>
      {Global.Voice === "on" ? <HearingIcon /> : <HearingDisabledIcon />}
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
  



  return (

<GlobalContext.Provider value={Global}>

    <ThemeProvider theme={CTheme[Global.mode]}>
      <ScopedCssBaseline enableColorScheme >



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

          <Mark >Provando nuevo mark</Mark>
          <Em >Provando nuevo Em</Em>
          <U  >Provando nuevo U</U>
          <A >Provando nuevo U</A>


          <FormReact />

        </Box>


      </ScopedCssBaseline>
    </ThemeProvider>
    </GlobalContext.Provider>

  );
}


