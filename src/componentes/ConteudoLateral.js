import logo from '../imagens/Logo.png';

export default function ConteudoLateral(){
    return (
        <div className='ConteudoLateral'>
            <img src={logo} alt="logo" />
        <div>Logo</div>

        <div>Menu
          <ul>
            <li>Home</li>
            <li>Pesquisa</li>
            <li>Explorar</li>
            <li>Mensagens</li>
          </ul>

        </div>
        
      </div>
    )
}