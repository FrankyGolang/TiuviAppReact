'use-strict'
import { callServerLogin, responseFormApp, useGlobalContext } from './options.js';
import React, { useState, createRef } from 'react';


import { InputOutlined } from "./inputs.js"

//Pasword
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { H1 , P1 } from './typography.js';
import Button from '@mui/material/Button';



export default function FormReact() {

    let [userName, setUserName] = useState('');
    let [password, setPasword] = useState('');
    let [showPassword,   setShowPassword] = useState('password');

    const globalContext = useGlobalContext();

    const ref2 = createRef();
    const ref3 = createRef();


  

    async function send_form(evento) {

        evento.preventDefault();

        const response = await callServerLogin(userName ,password )

        const messageServer = response.HGet64Speak("message")
   
        response.HGetToStorage("token")

        const status = responseFormApp(response.HGetStatus())

     
        globalContext.setMessage(evento, {  
            //	'filled' | 'outlined' | 'standard' | string
            variant:"filled",
            //error , warning , info , success
            severity: status,
            title: status === 'success'? 'Felicitaciones!' : 'Error de formulario',
            message: messageServer, 
        })
 

    }

    function change_focus(evento) {

        if (evento.target.name === 'userName' && evento.key === 'Enter') {
            ref2.current.focus();
       
        }

        if (evento.target.name === 'password' && evento.key === 'Enter') {
            ref3.current.focus();
         
        }

    }

 

    return (
   
        <Box
        component="form"
        encType='multipart/form-data'
        noValidate
        method="post"
        rel='external'
        target='_top'
        autoComplete="on"
        sx={{ 
            m:'10px',
            textAlign:'center',
        }}
        >
            <Stack 
            direction="column"
            justifyContent="center"
            spacing={2}>

                <H1>Registrate en Tiuvi</H1>
                <P1>En Tiuvi encontraras todo tipo de contenido, apoyamos a los creadores de contenido dandoles las
                    mejores herramientas para monetizar tanto pasivamente como activamente.
                </P1>

                <InputOutlined
                    element="input"
                    label="Username"
                    value={userName}

                    sx={{ backgroundColor: 'background.default' }}

                    id='userName'
                    name='userName'
                    type='text'
                    autocomplete="username"
                    placeholder="userName"
                
                    inputProps={{'data-voice': "Introduce una user name"}}
                    onChange={(event) => setUserName(event.target.value)
                    }
                    onKeyPress={change_focus}
                    update={setUserName}
                />
            
        
                <InputOutlined 
                    ref={ref2}
                    element="input"
                    label="Contraseña"
                    value={password}

                    id='password'
                    name='password'
                    type={showPassword}
                    autocomplete="new-password"
                
                        endAdornment={ <InputAdornment position="end">
                        <IconButton
                        color={showPassword === "password" ?  "buttonInactive": "buttonActive"}
                            aria-label="toggle password visibility"
                            onClick={()=> { showPassword === "password" ? setShowPassword('text') : setShowPassword('password')}}
                            edge="end"
                        >
                            {showPassword === "password" ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                    
                    placeholder="Contraseña"
                    inputProps={{'data-voice': "Introduce una contraseña"}}
                    onChange={  (event) => setPasword(event.target.value)}
                    onKeyPress={change_focus}
                    update={setPasword}
                />
                <Button variant="contained" 
                ref={ref3} 
                onClick={send_form} >Enviar</Button>
                
            </Stack>
        </Box>
    );




}


