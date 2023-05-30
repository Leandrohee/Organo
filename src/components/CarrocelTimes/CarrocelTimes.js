import BoxLista from './BoxLista/BoxLista';
import './CarrocelTimes.css'


function CarrocelTimes(props){    
    return(
        <div className='div-carrocel' style={{backgroundColor: props.colorDivMaior}}>
            <h3>{props.h3}</h3>
            <hr/>
            <ul className='ul-carrocel'>
                {props.colab.map(element => <BoxLista src={element.imagem} h5={element.nome} p={element.cargo} colorDivMenor={props.colorDivMenor}/>)} 
            </ul>
        </div>
    )
}

export default CarrocelTimes;


/*
        <div className='div-carrocel' style={{backgroundColor: props.colorDivMaior}}>
            <h3>{props.h3}</h3>
            <hr/>
            <ul className='ul-carrocel'>
                <BoxLista src="images/FotoTime/Ellipse 1.svg" h5="Juliana Amoasei" p="Desenvolvedora de software e instrutora" colorDivMenor={props.colorDivMenor}/>  
                <BoxLista src="images/FotoTime/Ellipse 2.svg" h5="Daniel Artine" p="Engenheiro de Software na Stone Age" colorDivMenor={props.colorDivMenor}/>
                <BoxLista src="images/FotoTime/Ellipse 3.svg" h5="Guilherme Lima" p="Desenvolvedor Python e JavaScript na Alura" colorDivMenor={props.colorDivMenor}/>
                <BoxLista src="images/FotoTime/Ellipse 4.svg" h5="Paulo Silveira" p="Hipster e CEO da Alura" colorDivMenor={props.colorDivMenor}/> 
            </ul>
        </div>
*/