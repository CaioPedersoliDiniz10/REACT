import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import Bomdia from './componentes/Bomdia';



import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Pai nome = "Paulo" sobrenome ="Silva"/>
    <Filho nome = "Pedro" />
    <Filho nome = "Paulo" />
    <Filho nome = "Carla" />
    
    
    </div>
  </React.StrictMode>
);
