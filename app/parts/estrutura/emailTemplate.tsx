import { ContatoTypes } from "@/app/parts/componentes/ContatoForm";

export function EmailTemplate(body: ContatoTypes) {
    return (
        <div>
            <h1>Contato Site - Planeta Animal</h1>
            <p>Nome: {body.nome}!</p>
            <p>E-mail: {body.email}!</p>
            <p>Telefone: {body.telefone}!</p>
        </div>
    )
};