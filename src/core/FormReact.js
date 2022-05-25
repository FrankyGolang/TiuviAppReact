'use-strict'
import { callServerLogin, responseFormApp , sVoice,Voicer, Reader} from './options.js';
import React, { useState, createRef } from 'react';
import {Base64} from 'js-base64';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//simplificar formulario 


export default function FormReact() {

    let [formvalue, setvalueform] = useState({ userName: '', password: '', data:"" });

    let [status, setValueStatus] = useState({ status: '' });


    const ref2 = createRef();
    const ref3 = createRef();

    function submitForm(evento) {
        
  console.log(evento)

        if (evento.target.name === 'userName') {
            setvalueform({
                userName: evento.target.value,
                password: formvalue.password
            });
        }

        if (evento.target.name === 'password') {
            setvalueform({
                password: evento.target.value,
                userName: formvalue.userName
            });
        }



  

    }

    async function send_form(evento) {

        console.log(evento)
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

            <Voicer 
                element="input"
                textLabel="Contraseña"
                
                 id='userName'
                 name='userName'
                 type='text'
                 autocomplete="username"
                 defaultValue={formvalue.name}
                 placeholder="userName"
            
                 onInput={submitForm}
                 onKeyPress={change_focus}
                 voicerText=" Introduce un user name"
            />
           
            <Voicer 
                ref={ref2}
                element="input"
                textLabel="Contraseña"

                 id='password'
                 name='password'
                 type='password'
                 autocomplete="new-password"
                 defaultValue={formvalue.password}
                 placeholder="Contraseña"
            
                 onInput={submitForm}
                 onKeyPress={change_focus}
                 voicerText=" Introduce una contraseña"
            />
            {status.status}
           
            <Voicer
                element="button"
                ref={ref3}
                onClick={send_form} voicerText="Acceder Ahora" />

        </form>
         <Box
         component="form"
         sx={{
           '& > :not(style)': { m: 1, width: '25ch' },
         }}
         noValidate
         autoComplete="off"
       >

         <TextField 
         id="standard-basic" 
         label="Standard" 
         variant="standard"
         onFocus={Reader}
         inputProps= {{'aria-label': 'myAriaLabel'}}
       
         />
       </Box>
       </>
    );



}


