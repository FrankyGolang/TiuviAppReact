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
import { green, grey, red, blue } from '@mui/material/colors';


import React, { useState } from 'react';


import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import { styled } from '@mui/material/styles';


let Theme = createTheme()



function styleTitle(FW) {

  return {
    fontFamily: "libre franklin",
    fontWeight: FW,
    fontSize: "35px",
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",

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

function styleText(FW, newAtr) {


  let styleText = {
    fontFamily: "libre franklin",
    fontWeight: FW,
    fontSize: "25px",
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
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

    styleText[newAtr.name] = newAtr.value

  }

  return styleText
}


function NewTypography(mode, tag, style) {

 

  CTheme[mode].components.MuiTypography.variants ??= []

  const found = CTheme[mode].components.MuiTypography.variants.find(element => element.props.variant === tag);

  if (found === undefined) {

    CTheme[mode].components.MuiTypography.variants.push({
      props: { variant: tag },
      style: styleText(400, style),
    });

    CTheme[mode].components.MuiTypography.defaultProps.variantMapping[tag] = tag

  }
 
}

const getDesignTokens = (mode) => ({

  typography: {

    fontFamily: "libre franklin",

    h1: styleTitle(800),
    h2: styleTitle(700),
    h3: styleTitle(600),
    h4: styleTitle(500),
    h5: styleTitle(500),
    h6: styleTitle(500),
    subtitle1: styleText(400),
    subtitle2: styleText(500),
    body1: styleText(400),
    body2: styleText(400, { name: "&:first-letter", value: { fontSize: "200%", fontWeight: 500, } }),
    button: styleTitle(600),
    caption: styleText(400),
    overline: styleText(400),
  },

  components: {
    MuiTypography: {
      //variants: [],

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

const CTheme = {
  light: createTheme(getDesignTokens("light")),
  dark: createTheme(getDesignTokens("dark")),
}


function Mark(props) {

  NewTypography(props.mode, "mark", { name: "backgroundColor", value: "lightskyblue" })

  return (
    <Typography variant="mark">{props.children}</Typography>
  )

}

function Em(props) {

  NewTypography(props.mode, "em", { name: "backgroundColor", value: "lawngreen" })

  return (
    <Typography variant="em">{props.children}</Typography>
  )

}

function U(props) {

  NewTypography(props.mode, "u", { name: "backgroundColor", value: "orange" })

  return (
    <Typography variant="u">{props.children}</Typography>
  )

}


export default function App() {

  //  const theme = useTheme();
  //console.log(theme)

  //Refactorizar este hook en un archivo apaerte que modifique el tema + el json de arriva.
  const [mode, setMode] = useState('light');



  function colorMode() {

    setMode(mode === "light" ? "dark" : "light");

  }

  // cachear el modo tema.

  console.log(CTheme[mode])





  return (


    <ThemeProvider theme={CTheme[mode]}>
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
            borderRadius: 1,

          }}
        >

          <IconButton sx={{ ml: 1 }} onClick={colorMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <Mark mode={mode}>Provando nuevo mark</Mark>
          <Em mode={mode}>Provando nuevo Em</Em>
          <U mode={mode} >Provando nuevo U</U>


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


