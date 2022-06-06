'use-strict'

//Contexto
import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './options.js'

//Lector de textos
import { Reader } from './sVoice.js'

//Material ui
import { OutlinedInput } from '@mui/material';

//    {...(Global.Voice === "on" && { onFocus: Reader})}


//REcognition imports
import { sListener } from "./recognition.js"

//simplificar formulario 
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';





export function InputOutlined(props) {

    const Global = useContext(GlobalContext);

    const [recording, setColor] = useState("buttonInactive");
    async function Recognition() {

        const startRecognition = await sListener.Recogniter()
        setColor("buttonActive")
        if (startRecognition) {
    
            while (sListener.Starter()) {
    
                if (!sListener.Starter()){
                    await new Promise(r => setTimeout(r, 250));
                }

                const results = await sListener.Results()

                if(results.length > 0){
                    props.update((prevState) => prevState + results[0])
                    results.shift()
                }
            }
        }
        setColor("buttonInactive")
    }
   

    return (
        <OutlinedInput
            {...props}

            {...(Global.recognition === "on" && { endAdornment: 
                <>
                        {props.endAdornment ? props.endAdornment : null}
                        <InputAdornment
                            position="end"
                         >
                            <IconButton
                                color={recording}
                                onClick={Recognition}
                                aria-label="recognition"
                                edge="end"
                            >
                                <MicIcon />
                            </IconButton>
                        </InputAdornment>
                    </>,
                    }
            )}
            

        
            onFocus={Global.Voice === "on" ? Reader : undefined}
            
        />
    )
}



