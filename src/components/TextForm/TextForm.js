import './TextForm.css'

function TextForm(props){
    console.log(props);
    return(
        <div className='text-form'>
            <label>{props.name}</label>
            <input type={props.type} placeholder={props.placeholder} required></input>
        </div>
    )
}

export default TextForm;