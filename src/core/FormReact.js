'use-strict'
import { Global ,callServerLogin } from './options.js';
import React, { useState, createRef } from 'react';




export default function FormReact() {

    let [formvalue, setvalueform] = useState({ userName: '', password: '', data:"" });

    let [status, setValueStatus] = useState({ status: '' });


    const ref2 = createRef();
    const ref3 = createRef();

    function submitForm(evento) {
        
        console.log(evento);
        console.log(evento.target.name);
        console.log(evento.target.value);

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



        console.log(formvalue);

    }

    async function send_form(evento) {

        console.log(formvalue);
        evento.preventDefault();

        const response = await callServerLogin(formvalue.userName ,formvalue.password )

        /*
        const data = await response.text()
        console.log(response.status)
        console.log(response.headers)
        */

        setvalueform({
            userName: formvalue.userName,
            password: formvalue.password,
            message: response.headers.get("message")
        });

        switch (response.status) {
            case 200:
                setValueStatus({ status: 'success' });

                var responseAudio = await fetch(Global.SoundConfirmation, {
                    headers: { 'range': 'bytes=0', },
                })


                var audioBuffer = await responseAudio.arrayBuffer()
                var ctx = new AudioContext();
                var source = ctx.createBufferSource();
                source.buffer = await ctx.decodeAudioData(audioBuffer)
                source.connect(ctx.destination);
                source.start(0)

                break;

            case 400:

                setValueStatus({ status: 'error' });

                var responseAudio = await fetch(Global.SoundError, {
                    headers: { 'range': 'bytes=0', },
                })
                var audioBuffer = await responseAudio.arrayBuffer()
                var ctx = new AudioContext();
                var source = ctx.createBufferSource();
                source.buffer = await ctx.decodeAudioData(audioBuffer)
                source.connect(ctx.destination);
                source.start(0)

                break;
            default:
                break;
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
                onInput={submitForm}
                onKeyPress={change_focus}
            />
            <p className={"text" + ' ' + status.status} >{formvalue.message} </p>
            <button
                className='title button'
                ref={ref3}
                onClick={send_form}>Acceder Ahora</button>

        </form>
    );



}


