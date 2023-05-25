import './BtnForm.css'

function BtnForm(props){
    return(
        <button className='btn-formulario'>{props.name}</button>
    )
}

export default BtnForm;