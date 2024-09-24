// Importações essenciais para o projeto

import React from 'react'; 
import ReactDOM from 'react-dom/client';


// Importação do componente App
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);