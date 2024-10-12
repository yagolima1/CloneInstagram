import './ConteudoPrincipal.css' // Importa o CSS para estilização do componente

// Importação dos componentes filhos
import { Story } from '../Status-Story/Story'
import { Post } from '../Post/Post'
import { ConteudoLateral } from '../ConteudoLateral/ConteudoLateral'

// Componente principal
export default function ConteudoPrincipal() {
    return (
        <div className="MainGrid"> {/* Container principal com classe para estilização */}
            
            {/* Primeira coluna */}
            <div className="first-column" style={{ gridArea: "firstColumn" }}>
                <div className="box">
                    <Story /> {/* Componente para exibir as histórias */}
                </div>

                <div className="box" style={{ margin: "30px 0" }}>
                    <Post /> {/* Componente para exibir um post */}
                </div>
            </div>

            {/* Segunda coluna */}
            <div style={{ gridArea: "secondColumn" }}>
                <div className="suggestionBox">
                    <ConteudoLateral /> {/* Componente para exibir sugestões de usuários */}
                </div>
            </div>

        </div>
    )
}
