'use-strict'
import { callServerLogin, responseFormApp , sVoice,Voicer, Reader} from './options.js';
import React, { useState, createRef } from 'react';
import {Base64} from 'js-base64';

import Box from '@mui/material/Box';

import { InputOutlined, InputOutlinedRecognition } from "./inputs.js"




export default function FormReact() {



    let [formvalue, setvalueform] = useState({ userName: '', password: '', data:"" });

    let [status, setValueStatus] = useState({ status: '' });


    const ref2 = createRef();
    const ref3 = createRef();




    function UpdateForm(evento) {
  
            setvalueform(prevState => ({                   
                ...prevState,    
                [evento.target.name]: evento.target.value, 
            }))
        
    }

    async function send_form(evento) {

        evento.preventDefault();

        const response = await callServerLogin(formvalue.userName ,formvalue.password )


        const messageServer64 = response.headers.get("message")

        const messageServer   = Base64.decode(messageServer64)
     
        sVoice.Speaker(messageServer)
   

        setvalueform({
            userName: formvalue.userName,
            password: formvalue.password,
            message: messageServer,
        });



        const token = response.headers.get("token")
        if (token !==  "") {

            localStorage.setItem('token', token);

        }

        const status = responseFormApp(response.status)
        const className = "text".concat( " " , status)
   
        setValueStatus({ status:  <p className={className} >{messageServer} </p> });

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



            <InputOutlinedRecognition 
                element="input"
                label="Username"
           
                sx={{ backgroundColor: 'background.default' }}

                 id='userName'
                 name='userName'
                 type='text'
                 autocomplete="username"
                 placeholder="userName"
            
                 inputProps={{'data-voice': "Introduce una user name"}}
                 onKeyPress={change_focus}
               
            />
           
       
            <InputOutlined 
                ref={ref2}
                element="input"
                label="Contraseña"
                value={formvalue.password}

                 id='password'
                 name='password'
                 type='password'
                 autocomplete="new-password"
               
                
                 placeholder="Contraseña"
                 inputProps={{'data-voice': "Introduce una contraseña"}}
                 onChange={UpdateForm}
                 onKeyPress={change_focus}
                
            />
            {status.status}
           
            <Voicer
                element="button"
                ref={ref3}
                onClick={send_form} voicerText="Acceder Ahora" />

        </form>

       </>
    );



}


