'use-strict'

//Contexto
import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './options.js'

//Lector de textos
import { Reader } from './sVoice.js'

//Material ui
import TextField from '@mui/material/TextField';

//    {...(Global.Voice === "on" && { onFocus: Reader})}


//REcognition imports
import { sListener } from "./recognition.js"

//simplificar formulario 
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';


export function InputOutlined(props) {

    const Global = useContext(GlobalContext);

    return (<TextField
        {...props}

        variant="outlined"
        onFocus={Global.Voice === "on" ? Reader : undefined}

    />)
}




export function InputOutlinedRecognition(props) {

    const Global = useContext(GlobalContext);

  

    let [formvalue, setvalueform] = useState('');

    function UpdateForm(evento) {

        setvalueform(evento.target.value)

    }


    async function Recognition(event) {

        const startRecognition = await sListener.Recogniter()
        if (startRecognition) {

            while (sListener.Starter()) {

                const results = await sListener.Results()

                setvalueform(results)
            }
        }
    }


    return (<TextField
        {...props}
        onChange={UpdateForm}
        value={formvalue}
        InputProps={{
            endAdornment: <InputAdornment
                position="end"
                variant="outlined">
                <IconButton
                    onClick={Recognition}
                    aria-label="recognition"
                    name='userName'
                    edge="end"
                >
                    <MicIcon />
                </IconButton>

            </InputAdornment>,
        }}
        variant="outlined"
        onFocus={Global.Voice === "on" ? Reader : undefined}

    />)
}