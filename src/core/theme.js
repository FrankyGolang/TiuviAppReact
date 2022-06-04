'use-strict'

import { createTheme } from '@mui/material/styles';
import { blueGrey, grey } from '@mui/material/colors';
import { styleTitle, styleText } from './typography.js'



const Themer = (mode) => ({

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
            } : {
                //dark
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

    toggleTheme: () => { },

});


export const BasicTheme = createTheme()


export const CTheme = {
    light: createTheme(Themer("light")),
    dark: createTheme(Themer("dark")),
}
