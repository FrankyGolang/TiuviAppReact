'use-strict'
import { callServerLogin, responseFormApp , sVoice,Voicer, Reader} from './options.js';
import React, { useState, createRef } from 'react';
import {Base64} from 'js-base64';

import Box from '@mui/material/Box';

import { InputOutlined } from "./inputs.js"

//Pasword
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function FormReact() {



    let [userName, setUserName] = useState('');
    let [password, setPasword] = useState('');
    let [status,   setValueStatus] = useState('');
    let [showPassword,   setShowPassword] = useState('password');
    

    const ref2 = createRef();
    const ref3 = createRef();


  

    async function send_form(evento) {

        evento.preventDefault();

        const response = await callServerLogin(userName ,password )


        const messageServer64 = response.headers.get("message")

        const messageServer   = Base64.decode(messageServer64)
     
        sVoice.Speaker(messageServer)
   

        const token = response.headers.get("token")
        if (token !==  "") {

            localStorage.setItem('token', token);

        }

        const status = responseFormApp(response.status)

        const className = "text".concat( " " , status)
   
        setValueStatus( <p className={className} >{messageServer} </p> );

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
        <> 
        <form
            id='alice_form'
            className='onesection headeracordeon marginall '
            action=''
            encType='multipart/form-data'
            method="post"
            rel='external'
            target='_top' >
   
            <Voicer 
            element="header" 
            voicerText="Inscripción en Tiuvi" />



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
            {status}
           
            <Voicer
                element="button"
                ref={ref3}
                onClick={send_form} voicerText="Acceder Ahora" />

        </form>

       </>
    );



}


