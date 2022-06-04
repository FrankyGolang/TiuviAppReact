'use-strict'

//import { Mark, Em, U, A } from './core/typography.js'

//Contexto
import React, { useContext } from 'react';

//Tipografia y fuentes
import Typography from '@mui/material/Typography';
import "typeface-libre-franklin";

//Tema basico y tema ocuro y claro dinamico.
import { CTheme, BasicTheme } from './theme.js'
import { GlobalContext } from './options.js'

//Lector de textos
import { Reader } from './sVoice.js'



export function styleTitle(FW, newAtr) {

    let styleText = {
        fontFamily: "libre franklin",
        fontWeight: FW,
        fontSize: "35px",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",

        [BasicTheme.breakpoints.up('xs')]: {
            fontSize: "6.5vw",
        },//600
        [BasicTheme.breakpoints.up('sm')]: {
            fontSize: "4.5vw",
        },//900
        [BasicTheme.breakpoints.up('md')]: {
            fontSize: "4vw",
        },//1200
        [BasicTheme.breakpoints.up('lg')]: {
            fontSize: "3vw",
        },//1536
        [BasicTheme.breakpoints.up('xl')]: {
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
        [BasicTheme.breakpoints.up('xs')]: {
            fontSize: "5.5vw",
        },//600
        [BasicTheme.breakpoints.up('sm')]: {
            fontSize: "3.5vw",
        },//900
        [BasicTheme.breakpoints.up('md')]: {
            fontSize: "3vw",
        },//1200
        [BasicTheme.breakpoints.up('lg')]: {
            fontSize: "2.5vw",
        },//1536
        [BasicTheme.breakpoints.up('xl')]: {
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

    const Global = useContext(GlobalContext);
    

    CTheme[Global.mode].components.MuiTypography.variants ??= []

    const found = CTheme[Global.mode].components.MuiTypography.variants.find(element => element.props.variant === tag);

    if (found === undefined) {

        CTheme[Global.mode].components.MuiTypography.variants.push({
            props: { variant: tag },
            style: styleText(400, style),
        });

        CTheme[Global.mode].components.MuiTypography.defaultProps.variantMapping[tag] = tag

    }

}




export function Mark(props) {

    const Global = useContext(GlobalContext);



    NewTypography( "mark", [
        { name: "backgroundColor", value: "lightskyblue" },
        { name: "borderRadius", value: "5px" },
        { name: "cursor", value: "pointer" },
        { name: "&:hover", value: { backgroundColor: "cornflowerblue", } },
        { name: "&:focus", value: { backgroundColor: "cornflowerblue", } },
        {
            name: "transition", value: `${CTheme[Global.mode].transitions.create('background-color', {
                duration: CTheme[Global.mode].transitions.duration.long,
            })}`
        },
    ])

   
    return (

        <Typography 
        variant="mark"
        tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>

    )

}

export function Em(props) {

    const Global = useContext(GlobalContext);

    NewTypography( "em", [
        { name: "backgroundColor", value: "lawngreen" },
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "black" },
        { name: "cursor", value: "pointer" },
        { name: "&:hover", value: { backgroundColor: "seagreen", } },
        { name: "&:focus", value: { backgroundColor: "seagreen", } },
        {
            name: "transition", value: `${CTheme[Global.mode].transitions.create('background-color', {
                duration: CTheme[Global.mode].transitions.duration.long,
            })}`
        },
    ])

    return (

        <Typography 
        variant="em"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>

    )

}

export function U(props) {

    const Global = useContext(GlobalContext);

    NewTypography( "u", [
        { name: "backgroundColor", value: "orange" },
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "black" },
        { name: "cursor", value: "pointer" },
        { name: "textDecoration", value: "none" },
        { name: "&:hover", value: { backgroundColor: "darkorange", } },
        { name: "&:focus", value: { backgroundColor: "darkorange", } },
        {
            name: "transition", value: `${CTheme[Global.mode].transitions.create('background-color', {
                duration: CTheme[Global.mode].transitions.duration.long,
            })}`
        },
    ])

    return (

        <Typography 
        variant="u"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>


    )

}

export function A(props) {

    const Global = useContext(GlobalContext);

    NewTypography( "a", [
        { name: "borderRadius", value: "5px" },
        { name: "color", value: "text.primary" },
        { name: "cursor", value: "pointer" },
        { name: "textDecoration", value: "underline" },
        { name: "&:hover", value: { "color": "skyblue", } },
        {
            name: "transition", value: `${CTheme[Global.mode].transitions.create('color', {
                duration: CTheme[Global.mode].transitions.duration.long,
            })}`
        },
    ])

    return (
        <Typography 
        variant="a"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>

    )

}


export function H1(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="h1"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function H2(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="h2"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function H3(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="h3"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function H4(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="h4"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function H5(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="h5"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}


export function H6(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="h6"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function Header1(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="subtitle1"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function Header2(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="subtitle2"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function P1(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="body1"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function P2(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="body2"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function B(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="button"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function Caption(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="caption"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}

export function Overline(props) {

    const Global = useContext(GlobalContext);

    return (
        <Typography 
        variant="overline"
         tabIndex={0}
        {...(Global.Voice === "on" && { onFocus: Reader ,onClick: Reader })}
        >{props.children}</Typography>
    )
}




