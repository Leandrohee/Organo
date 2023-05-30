import { useState } from 'react';
import BtnForm from '../BtnForm/BtnForm';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import TextForm from '../TextForm/TextForm';
import './Form.css'

function Form(props){

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")


    function aoSubmit(event){
        event.preventDefault();
        props.aoNovoColaborador({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
        <form onSubmit={aoSubmit} className="formulario">
            <h3 className="titulo-formulario">Preencha os dados para criar o card do colaborador.</h3>
            <TextForm 
                label="Nome"
                type="text" 
                placeholder="Digite seu nome"
                textoAlterado= {valor => setNome(valor)}
            />
            <TextForm 
                label="Cargo" 
                type="text" 
                placeholder="Digite seu cargo"
                textoAlterado = {valor => setCargo(valor)}
                />
            <TextForm 
                label="Imagem" 
                type="text" 
                placeholder="Informe o endereço da imagem"
                textoAlterado={valor => setImagem(valor)}
                />
            <ListaSuspensa 
                label="Time" 
                itens= {props.nomeDosTimes}
                textoAlterado= {valor => setTime(valor)} 
            />
            <BtnForm name="Criar card"/>
        </form>
    )
}

export default Form;