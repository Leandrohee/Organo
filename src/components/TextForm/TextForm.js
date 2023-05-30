import './TextForm.css'

function TextForm(props){

    function aoDigitar(event){                                 //FUNCAO EH CHAMADO QUANDO DIGITO ALGO 
        props.textoAlterado(event.target.value) 
    }     
    
    return(
        <div className='text-form'>
            <label>{props.label}</label>
            <input onChange={aoDigitar} type={props.type} placeholder={props.placeholder} required></input>
        </div>
    )
}

export default TextForm;