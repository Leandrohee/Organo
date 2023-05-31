import BoxLista from './BoxLista/BoxLista';
import './CarrocelTimes.css'


function CarrocelTimes(props){    
    return(
        props.colab.length > 0 && 
        <div className='div-carrocel' style={{backgroundColor: props.colorDivMaior}}>
            <h3>{props.h3}</h3>
            <hr style={{backgroundColor: props.colorDivMenor}}/>
            <ul className='ul-carrocel'>
                {props.colab.map(element => <BoxLista key={element.nome} src={element.imagem} h5={element.nome} p={element.cargo} colorDivMenor={props.colorDivMenor}/>)} 
            </ul>
        </div>
    )
}

export default CarrocelTimes;