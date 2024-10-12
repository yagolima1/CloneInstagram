import { Header } from  './componentes/Header';
import ConteudoPrincipal from './componentes/Conteudo Principal/ConteudoPrincipal';

// Importando o arquivo de estilos para esse componente
import './App.css';

// Função que retorna o componente App. 
// Essa função é exportada para ser usada em outros arquivos
	
export default function App() {
  // O componente App retorna um JSX que é renderizado na tela
  return (
    <div className="App">
      <Header />
      <ConteudoPrincipal/>
    </div>
  );
}

// export default App;