import Banner from './components/Banner/Banner.js';
import Form from './components/Form/Form.js';
import CarrocelTimes from './components/CarrocelTimes/CarrocelTimes.js';
import { useState } from 'react';

function App() {

  const time =[ 
    {
      nome:'Programação',
      corFundo: '#D9F7E9',
      corBox: "#57C278",
    },
    {
      nome:"Front-End",
      corFundo:"#E8F8FF",
      corBox:"#82CFFA",
    },
    {
      nome:"Data Science",
      corFundo:"#F0F8E2",
      corBox:"#A6D157",
    },
    {
      nome:"Devops",
      corFundo:"#FDE7E8",
      corBox:"#E06B69",
    },
    {
      nome:"UX e Design",
      corFundo:"#FAE9F5",
      corBox:"#DB6EBF",
    },
    {
      nome:"Mobile",
      corFundo:"#FFF5D9",
      corBox:"#FFF5D9",
    },
    {
      nome:"Inovação e Gestão",
      corFundo:"#FFEEDF",
      corBox:"#FF8A29",
    },
  ]
  
  const [colaboradores, setColaboradores] = useState([]);

  function addNovoColaborador(colaborador){
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Form  nomeDosTimes={time.map(time => time.nome)} aoNovoColaborador={colaborador => addNovoColaborador(colaborador)}/>
      {time.map(time =>                                                                                                            //Aqui faz os 7 carroceis 
        <CarrocelTimes 
          key={time.nome} 
          h3={time.nome} 
          colorDivMaior={time.corFundo} 
          colorDivMenor={time.corBox} 
          colab={colaboradores.filter(element => element.time == time.nome)}                                                      //Aqui envia somente os box filtrados
          teste={time.nome}                                                                                                       //Somente para pegar o nome do time e testar
        />)}
    </div>
  );
}

export default App;
