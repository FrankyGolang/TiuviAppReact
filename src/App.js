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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  blueGrey, grey } from '@mui/material/colors';


import React, { useContext , useState } from 'react';


import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import Fade from '@mui/material/Fade';


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

  if (newAtr !== undefined) {

    var i = newAtr.length; while (i--) {
      styleText[newAtr[i].name] = newAtr[i].value
    }

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
    body2: styleText(400, [
      { name: "&:first-letter", value: { fontSize: "200%", fontWeight: 500, } }
    ]),
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
        //Hover
        secondary: "mediumblue",
      }
        : { //dark
          primary: blueGrey[100],
          //Hover
          secondary: "deepskyblue",
        }),
    },
  },

  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      long: 1000,
      //tiempo recomendado más básico
      standard: 300,
     //esto es para ser usado en animaciones complejas
      complex: 375,
     //recomendado cuando algo está entrando en la pantalla
      enteringScreen: 225,
      //recomendado cuando algo sale de la pantalla
      leavingScreen: 195,
    },
      easing: {
      //Esta es la curva de aceleración más común.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
     //Los objetos ingresan a la pantalla a toda velocidad desde fuera de la pantalla y
     //desacelerar lentamente hasta un punto de reposo.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
     //Los objetos salen de la pantalla a toda velocidad. No desaceleran cuando están fuera de la pantalla.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
     //La curva pronunciada es utilizada por objetos que pueden volver a la pantalla en cualquier momento.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

const CTheme = {
  light: createTheme(getDesignTokens("light")),
  dark: createTheme(getDesignTokens("dark")),
}





function Mark(props) {

  const Global = useContext(GlobalContext);

  NewTypography(Global.mode, "mark", [
    { name: "backgroundColor", value: "lightskyblue" },
    { name: "borderRadius", value: "5px" },
    { name: "cursor", value: "pointer" },
    { name: "&:hover",    value: { backgroundColor: "cornflowerblue", } },
   { name: "transition",    value: `${CTheme[Global.mode].transitions.create('background-color', {
    duration: CTheme[Global.mode].transitions.duration.long,})}` },
  ])

  return (

    <Typography variant="mark">{props.children}</Typography>

  )

}

function Em(props) {

  const Global = useContext(GlobalContext);

  NewTypography(Global.mode, "em", [
    { name: "backgroundColor", value: "lawngreen" },
    { name: "borderRadius", value: "5px" },
    { name: "color", value: "black" },
    { name: "cursor", value: "pointer" },
    { name: "&:hover", value: { backgroundColor: "seagreen", } },
    { name: "transition",    value: `${CTheme[Global.mode].transitions.create('background-color', {
      duration: CTheme[Global.mode].transitions.duration.long,})}` },
  ])

  return (

    <Typography variant="em">{props.children}</Typography>

  )

}

function U(props) {

  const Global = useContext(GlobalContext);

  NewTypography(Global.mode, "u", [
    { name: "backgroundColor", value: "orange" },
    { name: "borderRadius", value: "5px" },
    { name: "color", value: "black" },
    { name: "cursor", value: "pointer" },
    { name: "textDecoration", value: "none" },
    { name: "&:hover", value: { backgroundColor: "darkorange", } },
    { name: "transition",    value: `${CTheme[Global.mode].transitions.create('background-color', {
      duration: CTheme[Global.mode].transitions.duration.long,})}` },
  ])

  return (
   
    <Typography variant="u">{props.children}</Typography>
 
  
  )

}

function A(props) {

  const Global = useContext(GlobalContext);
  
  console.log("a element", Global.mode)
  NewTypography(Global.mode, "a", [
    { name: "borderRadius", value: "5px" },
    { name: "color", value: "text.primary" },
    { name: "cursor", value: "pointer" },
    { name: "textDecoration", value: "underline" },
    { name: "&:hover", value: { "color": "skyblue", } },
    { name: "transition",    value: `${CTheme[Global.mode].transitions.create('color', {
      duration: CTheme[Global.mode].transitions.duration.long,})}` },
  ])

  return (
    <Typography variant="a">{props.children}</Typography>

  )

}


let themeMode = localStorage.getItem('themeMode');

console.log(themeMode)
if ( themeMode === null ){

  themeMode = "light"
  localStorage.setItem('themeMode', 'light');

}

const global = {
  mode: themeMode,
  toggleTheme: () => {},
}


const GlobalContext = React.createContext(global);


function ToggleButton(props){

  const Global = useContext(GlobalContext);

  console.log("ToggleButton: ", global.mode)
  return(
    <IconButton sx={{ ml: 1 }}  color="inherit" onClick={global.toggleTheme}>
    {Global.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>
  )
}


export default function App() {


  const [mode, setMode] = useState(global.mode);
   global.toggleTheme = () => {

    setMode(() => {

      global.mode = global.mode === "light" ? "dark" : "light"
      localStorage.setItem('themeMode', global.mode);
      return global.mode
    })
  }


  return (

<GlobalContext.Provider value={global}>

    <ThemeProvider theme={CTheme[global.mode]}>
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

          <IconButton sx={{ ml: 1 }}  color="inherit" onClick={global.toggleTheme}>

            {global.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

          <Mark >Provando nuevo mark</Mark>
          <Em >Provando nuevo Em</Em>
          <U  >Provando nuevo U</U>
          <A >Provando nuevo U</A>



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

          <p>This is a mode theme with custom palette</p>

          <FormReact />
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
    </GlobalContext.Provider>

  );
}


