'use-strict'

//Tipografia y fuentes
import Typography from '@mui/material/Typography';
import "typeface-libre-franklin";

//Tema basico y tema ocuro y claro dinamico.
import { cTheme, basicTheme } from './theme.js'
import { useGlobalContext } from './options.js'

//Lector de textos
import { reader } from './sVoice.js'


//Alertas globales.
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//Voicer para las alertas
import { sVoice } from './sVoice.js';



export function styleTitle(FW, newAtr) {

    let styleText = {
        fontFamily: "libre franklin",
        fontWeight: FW,
        fontSize: "35px",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",
        cursor: "pointer",
        [basicTheme.breakpoints.up('xs')]: {
            fontSize: "6.5vw",
        },//600
        [basicTheme.breakpoints.up('sm')]: {
            fontSize: "4.5vw",
        },//900
        [basicTheme.breakpoints.up('md')]: {
            fontSize: "4vw",
        },//1200
        [basicTheme.breakpoints.up('lg')]: {
            fontSize: "3vw",
        },//1536
        [basicTheme.breakpoints.up('xl')]: {
            fontSize: "35px",
        },
    }
    if (newAtr !== undefined) {

        var i = newAtr.length; while (i--) {
            styleText[newAtr[i].name] = newAtr[i].value
        }

    }

    return styleText

}

export function styleText(FW, newAtr) {


    let styleText = {
        fontFamily: "libre franklin",
        fontWeight: FW,
        fontSize: "25px",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",
        cursor: "pointer",
        [basicTheme.breakpoints.up('xs')]: {
            fontSize: "5.5vw",
        },//600
        [basicTheme.breakpoints.up('sm')]: {
            fontSize: "3.5vw",
        },//900
        [basicTheme.breakpoints.up('md')]: {
            fontSize: "3vw",
        },//1200
        [basicTheme.breakpoints.up('lg')]: {
            fontSize: "2.5vw",
        },//1536
        [basicTheme.breakpoints.up('xl')]: {
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



//Creacion de nuevas tipografias.
function NewTypography(tag, style) {

    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme();
    console.log('NewTypography', modeTheme)

    cTheme[modeTheme].components.MuiTypography.variants ??= []

    const found = cTheme[modeTheme].components.MuiTypography.variants.find(element => element.props.variant === tag);

    if (found === undefined) {

        cTheme[modeTheme].components.MuiTypography.variants.push({
            props: { variant: tag },
            style: styleText(400, style),
        });

        cTheme[modeTheme].components.MuiTypography.defaultProps.variantMapping[tag] = tag

    }

}




export function Mark(props) {

    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme();


    NewTypography( "mark", [
        { name: "backgroundColor", value: "lightskyblue" },
        { name: "borderRadius", value: "5px" },
        { name: "cursor", value: "pointer" },
        { name: "&:hover", value: { backgroundColor: "cornflowerblue", } },
        { name: "&:focus", value: { backgroundColor: "cornflowerblue", } },
        {
            name: "transition", value: `${cTheme[modeTheme].transitions.create('background-color', {
                duration: cTheme[modeTheme].transitions.duration.long,
            })}`
        },
    ])

   
    return (

        <Typography 
        variant="mark"
        tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>

    )

}

export function Em(props) {

    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme();

    NewTypography( "em", [
        { name: "backgroundColor", value: "lawngreen" },
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "black" },
        { name: "cursor", value: "pointer" },
        { name: "&:hover", value: { backgroundColor: "seagreen", } },
        { name: "&:focus", value: { backgroundColor: "seagreen", } },
        {
            name: "transition", value: `${cTheme[modeTheme].transitions.create('background-color', {
                duration: cTheme[modeTheme].transitions.duration.long,
            })}`
        },
    ])

    return (

        <Typography 
        variant="em"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>

    )

}

export function U(props) {

    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme();

    NewTypography( "u", [
        { name: "backgroundColor", value: "orange" },
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "black" },
        { name: "cursor", value: "pointer" },
        { name: "textDecoration", value: "none" },
        { name: "&:hover", value: { backgroundColor: "darkorange", } },
        { name: "&:focus", value: { backgroundColor: "darkorange", } },
        {
            name: "transition", value: `${cTheme[modeTheme].transitions.create('background-color', {
                duration: cTheme[modeTheme].transitions.duration.long,
            })}`
        },
    ])

    return (

        <Typography 
        variant="u"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>


    )

}

export function A(props) {

    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme();

    NewTypography( "a", [
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "text.primary" },
        { name: "cursor", value: "pointer" },
        { name: "textDecoration", value: "underline" },
        { name: "&:hover", value: { "color": "skyblue", } },
        {
            name: "transition", value: `${cTheme[modeTheme].transitions.create('color', {
                duration: cTheme[modeTheme].transitions.duration.long,
            })}`
        },
    ])

    return (
        <Typography 
        variant="a"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>

    )

}


export function H1(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="h1"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function H2(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="h2"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function H3(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="h3"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function H4(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="h4"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function H5(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="h5"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}


export function H6(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="h6"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function Header1(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="subtitle1"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function Header2(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="subtitle2"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function P1(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="body1"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function P2(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="body2"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function PList(props) {

    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme();

    NewTypography( "p", [
        { name: "borderRadius", value: "5px" },
        { name: "color", value: props.color },
        { name: "cursor", value: "pointer" },
        {
            name: "transition", value: `${cTheme[modeTheme].transitions.create('color', {
                duration: cTheme[modeTheme].transitions.duration.long,
            })}`
        },
    ])

    return (
        <Typography 
        variant="p"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>

    )

}

export function B(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="button"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function Caption(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="caption"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}

export function Overline(props) {

    const globalContext = useGlobalContext();

    return (
        <Typography 
        variant="overline"
         tabIndex={0}
        {...(globalContext.voice === "on" && { onFocus: reader ,onClick: reader })}
        >{props.children}</Typography>
    )
}





export function AlertsGlobal(props){

    const globalContext = useGlobalContext();

    const message = props.message

    if (message === undefined) return null;
    if (message.message === undefined) return null;

    message.variant = message.variant !== undefined ?  message.variant : 'standard' 
    message.severity    = message.severity !== undefined ?  message.severity : 'info' 
    message.title   = message.title !== undefined ? <AlertTitle>{message.title}</AlertTitle> : null
    globalContext.voice === "on" && sVoice.Speaker(message.message)


    return(<Stack sx={{ 
        bgcolor: 'background.default',
        width: '100%'
         }} spacing={2}>
        <Alert 
            icon={message.icon !== undefined ?  message.icon : true }
            variant={message.variant}
            severity={message.severity}
            onClose={(event) => globalContext.setMessage(event, 'delete')}>
            
        {message.title}
        {message.message}
        </Alert>
  </Stack>)
}