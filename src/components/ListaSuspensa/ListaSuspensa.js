import "./ListaSuspensa.css"

function ListaSuspensa(props){

    function SelecionaListaSusp(event){
        props.textoAlterado(event.target.value);
    }

    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.value} onChange={SelecionaListaSusp}>
                <option value={""} ></option>
                {props.itens.map(element =>  <option key={element}>{element}</option>)} 
            </select>
        </div>
    )
}

export default ListaSuspensa;