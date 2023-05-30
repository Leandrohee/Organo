import './BoxLista.css'

function BoxLista(props){
    return(
        <li className='box-lista'>
            <div style={{backgroundColor: props.colorDivMenor}} ></div>
            <img src={props.src}/>
            <h5>{props.h5}</h5>
            <p>{props.p}</p>
        </li>
    )
}

export default BoxLista;