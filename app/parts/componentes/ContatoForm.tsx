"use client";
import { faAngleRight, faArrowRightLong, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface ContatoTypes {
    nome: string,
    email: string,
    telefone: string,
}

export default function ContatoForm() {
    const { register, handleSubmit, reset } = useForm<ContatoTypes>();
    const [message, setMessage] = useState<string>('');
    const [colorMessage, setColorMessage] = useState<string>('bg-red-700');
    
    function onSubmitSend(data: ContatoTypes) {
        if (data.nome == null || data.nome.length < 3) { setMessage('O nome digitado não é válido'); }
        else if (data.email == null || data.email.length < 5) { setMessage('O e-mail digitado não é válido'); }
        else if (data.telefone == null || data.telefone.length < 7) { setMessage('O telefone digitado não é válido'); }
        else if (!data.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { setMessage('O e-mail digitado não é válido'); }
        else {
            setMessage('');
            axios.post('/api/resend', data)
            .then(function (response) {
                if (response.data) { setMessage("Mensagem enviada com sucesso"); setColorMessage('bg-green-700'); reset(); } 
                else { setMessage("Mensagem não enviada, verifique todos os campos e tente novamente"); setColorMessage('bg-red-700');  }
            })
            .catch(() => setMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"));
        }
    }
    return (

         <form className="w-full mb-6" onSubmit={handleSubmit(onSubmitSend)}>
            <div className="flex flex-col gap-y-5 mb-4 ">
                <input {...register('nome')} className="bg-white text-sm md:text-lg p-3 md:p-4 rounded-md block w-full placeholder-neutral-400" placeholder="Nome" />
                <input {...register('email')} className="bg-white text-sm md:text-lg p-3 md:p-4 rounded-md block w-full placeholder-neutral-400" placeholder="E-mail" />
                <input {...register('telefone')} className="bg-white text-sm md:text-lg p-3 md:p-4 rounded-md block w-full placeholder-neutral-400" placeholder="Telefone" />
            </div>  
            <button className="flex items-center  text-white text-xs px-8 sm:px-10 md:text-xl py-2 md:px-12 bg-marrom-500 p-2 rounded-md uppercase ">
                Enviar
                <FontAwesomeIcon className="w-2 h-2 md:w-4 md:h-4 ml-2" icon={faArrowRightLong} /> 
            </button>
            {
                (message != '') ? <div id="response-contact" className="w-full"><div className={'wpcf7-response-output w-full text-white text-sm md:text-base xl:text-lg my-2 p-2 uppercase text-center border-2 border-white border-dashed ' + colorMessage} role="alert">{message}</div></div> : ''
            }
        </form>
    )
} 