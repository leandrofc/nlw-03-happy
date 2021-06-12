import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';


import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;









/*
EXEMPLO COMENTADO PARA ENTENDER OS CONCEITOS


import React from 'react';  //importa o react

//JSX = Javascript XML (html)
//Componentes = funções que retornam html

interface TitleProps {  //padroniza qual será o tipo de propriedade recebida
  text: string;
}

function Title(props: TitleProps) { //componente que retorna um html
  return (
    <h1>{props.text}</h1> //retorna um H1. entre as chaves mostra qual é o tipo de propriedade que se pode receber (ropriedade definida na interface logo acima)
  )
}

function App() {  //Componente que retorna html
  return (  // <Title text="Titulo 1" />     chama o componente e passa o atributo, nesse caso o conteúdo que está dentro do "text"
    <div className="App">
      <Title text="Titulo 1" />
      <Title text="Titulo 2" />
      <Title text="Titulo 3" />
      <Title text="Titulo 4" />
    </div>
  );
}

export default App;


*/