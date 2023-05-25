import BtnForm from '../BtnForm/BtnForm';
import TextForm from '../TextForm/TextForm';
import './Form.css'


function Form(){
    return(
        <form className="formulario">
            <h3 className="titulo-formulario">Preencha os dados para criar o card do colaborador.</h3>
            <TextForm name="Nome" type="text" placeholder="Digite seu nome"/>
            <TextForm name="Cargo" type="text" placeholder="Digite seu cargo"/>
            <TextForm name="Imagem" type="text" placeholder="Informe o endereço da imagem"/>
            <BtnForm name="Criar card"/>
        </form>
    )
}

export default Form;