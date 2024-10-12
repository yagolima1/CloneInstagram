// Importa o arquivo CSS para estilização do componente Story
import './Story.css';

// Define o componente funcional Story
export function Story () {
    // Renderiza o componente
    return (
        <div className='container'> {/* Container principal para os elementos de história */}
        
            {/* Primeiro bloco de elementos de usuário com close (um grupo de usuários que podem ser "fechados") */}
            <div className='elementos-usuario-close'>
                <div>
                    {/* Imagem do usuário com uma classe para estilização */}
                    <img className='imagem-usuario' src='https://i.pinimg.com/236x/7a/2e/b8/7a2eb848eaf783479564a8cc382f2882.jpg' alt='foto-de-perfil'/>
                </div>
                {/* Nome do usuário */}
                <span> Son Goku</span>
            </div>

            {/* Segundo bloco de elementos de usuário com close */}
            <div className='elementos-usuario-close'>
                <div>
                    {/* Imagem do usuário */}
                    <img className='imagem-usuario' src='https://64.media.tumblr.com/93bf067118ec52b774191f6035227d18/ccc49819c67b9e0d-1e/s250x400/3217986bb35dbc38497b10fdc3d5aa59e99f6df4.jpg' alt='foto-de-perfil'/>
                </div>
                <span>Neymar Jr</span>
            </div>

            {/* Blocos de elementos de usuário sem a classe "close" */}
            <div className='elementos-usuario'>
                <div>
                    <img className='imagem-usuario' src='https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg' alt='foto-de-perfil'/>
                </div>
                <span>Tony Stark</span>
            </div>

            <div className='elementos-usuario'>
                <div>
                    <img className='imagem-usuario' src='https://github.com/gabaugusto.png' alt='foto-de-perfil'/>
                </div>
                <span>gabaugusto</span>
            </div>

            <div className='elementos-usuario'>
                <div>
                    <img className='imagem-usuario' src='https://i.pinimg.com/736x/92/41/09/92410905c73b68fc40cafad2ea0ed689.jpg' alt='foto-de-perfil'/>
                </div>
                <span>Mr.Morgan</span>
            </div>

            <div className='elementos-usuario'>
                <div>
                    <img className='imagem-usuario' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxwNgcvkCreI-2eDl6Ezt_95qBFHJQhRCSQ&s' alt='foto-de-perfil'/>
                </div>
                <span>Inst PROA</span>
            </div>

            <div className='elementos-usuario'>
                <div>
                    <img className='imagem-usuario' src='https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd' alt='foto-de-perfil'/>
                </div>
                <span>Bruno Mars</span>
            </div>
        </div>
    )
}
