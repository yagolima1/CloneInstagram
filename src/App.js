import ConteudoLateral from './componentes/ConteudoLateral';

// importado arquivo de estilos para esse componente
import './App.css';

// função que retorna o componente app
// essa função é exportada para ser usada em  outros arquivos
export default function App() {

  // o componente app retorna um JSX que é renderizado na tela
  return (

    <div className="App">


    <ConteudoLateral/>
    
      

      <div className='ConteudoPrincipal'>
        Conteúdo Principal
      </div>


    </div>
  );
}
