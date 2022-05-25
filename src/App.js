'use-strict'
import './App.css';
import FormReact from './core/FormReact.js';


import Typography from '@mui/material/Typography';


//npm install --save typeface-libre-franklin
import "typeface-libre-franklin";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { green,  grey ,red,  blue} from '@mui/material/colors';


import React, { useState } from 'react';


import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import { styled } from '@mui/material/styles';

let Theme = createTheme()



function styleTitle(FW){
 
  return  {
    fontFamily: "libre franklin",
    fontWeight: FW,
    fontSize: "35px",
    lineHeight: 1.2,
    letterSpacing:"-0.00833em",
  
    [Theme.breakpoints.up('xs')]: {
      fontSize: "6.5vw",
    },//600
    [Theme.breakpoints.up('sm')]: {
      fontSize: "4.5vw",
    },//900
    [Theme.breakpoints.up('md')]: {
      fontSize: "4vw",
    },//1200
    [Theme.breakpoints.up('lg')]: {
      fontSize: "3vw",
    },//1536
    [Theme.breakpoints.up('xl')]: {
      fontSize: "35px",
    },
  }
}

function styleText(FW, newAtr){
 

  let styleText = {
    fontFamily: "libre franklin",
    fontWeight: FW,
    fontSize: "25px",
    lineHeight: 1.2,
    letterSpacing:"-0.00833em",
    [Theme.breakpoints.up('xs')]: {
      fontSize: "5.5vw",
    },//600
    [Theme.breakpoints.up('sm')]: {
      fontSize: "3.5vw",
    },//900
    [Theme.breakpoints.up('md')]: {
      fontSize: "3vw",
    },//1200
    [Theme.breakpoints.up('lg')]: {
      fontSize: "2.5vw",
    },//1536
    [Theme.breakpoints.up('xl')]: {
      fontSize: "25px",
    },
  }

  if (newAtr != undefined) {

    styleText[newAtr.name ] = newAtr.value

  }

  return styleText
}

/*
    "&:first-letter": {
      fontSize: "200%",
    fontWeight: 500,
  },
*/
const getDesignTokens = (mode) => ({

  typography: {
    fontFamily: "libre franklin",

    h1:styleTitle(800), 
    h2:styleTitle(700), 
    h3:styleTitle(600), 
    h4:styleTitle(500), 
    h5:styleTitle(500), 
    h6:styleTitle(500), 
    subtitle1: styleText(400),
    subtitle2: styleText(500),
    body1: styleText(400),
    body2: styleText(400 ,{name:"&:first-letter", value:{fontSize: "200%",fontWeight: 500,}}),
    button:styleTitle(600),
    caption:styleText(400),
    overline:styleText(400),

  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: 'header',
          subtitle2: 'header',
        },
      },
    },
  },
  palette: {
    mode,

    text: {
      ...(mode === 'light' ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : { //dark
            primary: green[200],
            secondary: grey[500],
          }),
    },
  },

});


const LTheme  = createTheme(getDesignTokens("light"));
const DTheme = createTheme(getDesignTokens("dark"));



export default function App() {

//  const theme = useTheme();
//console.log(theme)

//Refactorizar este hook en un archivo apaerte que modifique el tema + el json de arriva.
    const [mode, setMode] = useState('light');
   
  
  
      function colorMode() {
       
        setMode(mode === "light" ? "dark": "light" );

      }
        
      // cachear el modo tema.

      console.log(mode)
      console.log(LTheme)
      console.log(DTheme)




  return (


    <ThemeProvider theme={mode === "light" ? LTheme : DTheme}>
          <ScopedCssBaseline enableColorScheme >
      
    

    <Box
      sx={{
        display: 'flex',
        flexDirection:'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
   
      }}
    >
      
      <IconButton sx={{ ml: 1 }} onClick={colorMode} color="inherit">
      {DTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
  
      <Typography variant="h1">Responsive Responsive Responsive</Typography>
      <Typography variant="h2">Responsive Responsive Responsive</Typography>
      <Typography variant="h3">Responsive Responsive Responsive</Typography>
      <Typography variant="h4">Responsive Responsive Responsive</Typography>
      <Typography variant="h5">Responsive Responsive Responsive</Typography>
      <Typography variant="h6">Responsive Responsive Responsive</Typography>

      <Typography variant="subtitle1">Responsive Responsive Responsive</Typography>
      <Typography variant="subtitle2">Responsive Responsive Responsive</Typography>
      <Typography variant="body1">Responsive Responsive Responsive</Typography>
      <Typography variant="body2">Responsive Responsive Responsive</Typography>

      <Typography variant="button">Boton</Typography>
      <Typography variant="caption">Esto es un subtitulo</Typography>
      <Typography variant="overline">Responsive Responsive Responsive</Typography>

      <p>This is a {mode} mode theme with custom palette</p>

      <FormReact />
    </Box>
    </ScopedCssBaseline>
    </ThemeProvider>

  );
}


