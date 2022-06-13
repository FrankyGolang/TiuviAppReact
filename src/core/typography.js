'use-strict'

//Tipografia y fuentes
import Typography from '@mui/material/Typography';
import "typeface-libre-franklin";

//Tema basico y tema ocuro y claro dinamico.
import { cTheme, basicTheme } from './theme.js'
import { useGlobalContext } from './options.js'

//Lector de textos
import { reader } from './sVoice.js'



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
    

    cTheme[globalContext.mode].components.MuiTypography.variants ??= []

    const found = cTheme[globalContext.mode].components.MuiTypography.variants.find(element => element.props.variant === tag);

    if (found === undefined) {

        cTheme[globalContext.mode].components.MuiTypography.variants.push({
            props: { variant: tag },
            style: styleText(400, style),
        });

        cTheme[globalContext.mode].components.MuiTypography.defaultProps.variantMapping[tag] = tag

    }

}




export function Mark(props) {

    const globalContext = useGlobalContext();



    NewTypography( "mark", [
        { name: "backgroundColor", value: "lightskyblue" },
        { name: "borderRadius", value: "5px" },
        { name: "cursor", value: "pointer" },
        { name: "&:hover", value: { backgroundColor: "cornflowerblue", } },
        { name: "&:focus", value: { backgroundColor: "cornflowerblue", } },
        {
            name: "transition", value: `${cTheme[globalContext.mode].transitions.create('background-color', {
                duration: cTheme[globalContext.mode].transitions.duration.long,
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

    NewTypography( "em", [
        { name: "backgroundColor", value: "lawngreen" },
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "black" },
        { name: "cursor", value: "pointer" },
        { name: "&:hover", value: { backgroundColor: "seagreen", } },
        { name: "&:focus", value: { backgroundColor: "seagreen", } },
        {
            name: "transition", value: `${cTheme[globalContext.mode].transitions.create('background-color', {
                duration: cTheme[globalContext.mode].transitions.duration.long,
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

    NewTypography( "u", [
        { name: "backgroundColor", value: "orange" },
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "black" },
        { name: "cursor", value: "pointer" },
        { name: "textDecoration", value: "none" },
        { name: "&:hover", value: { backgroundColor: "darkorange", } },
        { name: "&:focus", value: { backgroundColor: "darkorange", } },
        {
            name: "transition", value: `${cTheme[globalContext.mode].transitions.create('background-color', {
                duration: cTheme[globalContext.mode].transitions.duration.long,
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

    NewTypography( "a", [
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "text.primary" },
        { name: "cursor", value: "pointer" },
        { name: "textDecoration", value: "underline" },
        { name: "&:hover", value: { "color": "skyblue", } },
        {
            name: "transition", value: `${cTheme[globalContext.mode].transitions.create('color', {
                duration: cTheme[globalContext.mode].transitions.duration.long,
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

    NewTypography( "p", [
        { name: "borderRadius", value: "5px" },
        { name: "color", value: props.color },
        { name: "cursor", value: "pointer" },
        {
            name: "transition", value: `${cTheme[globalContext.mode].transitions.create('color', {
                duration: cTheme[globalContext.mode].transitions.duration.long,
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




