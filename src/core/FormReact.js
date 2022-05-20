'use-strict'
import { callServerLogin, responseFormApp  ,sVoice} from './options.js';
import React, { useState, createRef } from 'react';
import {Base64} from 'js-base64';

var SVoice = sVoice.Speaker

export default function FormReact() {

    let [formvalue, setvalueform] = useState({ userName: '', password: '', data:"" });

    let [status, setValueStatus] = useState({ status: '' });


    const ref2 = createRef();
    const ref3 = createRef();

    function submitForm(evento) {
        
  

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


        evento.preventDefault();

        const response = await callServerLogin(formvalue.userName ,formvalue.password )


        const messageServer64 = response.headers.get("message")

        const messageServer   = Base64.decode(messageServer64)
     
        SVoice(messageServer)
   

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

    function voiceInfo (evento)  {

        console.log(evento)
        console.log(evento.target.name)
        if (evento.target.name === 'userName') {

            SVoice("Introduce un userName")

        }
        if (evento.target.name === 'password') {

            SVoice("Introduce una contraseña")

        }
        
        if (evento.target.id === "sendButton"){
            SVoice("Enter para enviar el formulario")
        }
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
        <form
            id='alice_form'
            className='onesection headeracordeon marginall '
            action=''
            encType='multipart/form-data'
            method="post"
            rel='external'
            target='_top' >
            <header
                className='title textcenter'> Inscripción en Tiuvi </header>
            <label htmlFor='userName' className='labelform text'>Nombre en tiuvi</label>
            <input
                id='userName'
                className='text camposform'
                name='userName'
                type='text'
                defaultValue={formvalue.name}
                placeholder="userName"
                onFocus={voiceInfo}
                onInput={submitForm}
                onKeyPress={change_focus} />

            <label htmlFor='password' className='labelform text'>Contraseña</label>
            <input
                id='password'
                className='text camposform'
                name='password'
                type='password'
                defaultValue={formvalue.password}
                placeholder="Contraseña"
                ref={ref2}
                onFocus={voiceInfo}
                onInput={submitForm}
                onKeyPress={change_focus}
            />
            {status.status}
           
            <button
                id="sendButton"
                className='title button'
                ref={ref3}
                onFocus={voiceInfo}
                onClick={send_form}>Acceder Ahora</button>

        </form>
    );



}


