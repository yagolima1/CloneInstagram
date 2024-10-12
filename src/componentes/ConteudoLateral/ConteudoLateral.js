import { useEffect, useState } from 'react' // Importa os hooks useEffect e useState do React
import './ConteudoLateral.css' // Importa o arquivo CSS para estilização do componente

export function ConteudoLateral() {
    // Define o estado para armazenar sugestões de usuários
    const [suggestions, setSuggestions] = useState([])

    // Define o estado para limitar o número de usuários a serem exibidos
    const [limitUsers, setLimitUsers] = useState(3)

    // Cria um "slice" das sugestões com base no limite definido
    const slice = suggestions.slice(0, limitUsers)

    // useEffect para buscar dados da API quando o componente é montado
    useEffect(() => {
        fetch(`https://api.github.com/users/yagolima1/following`) // Faz uma requisição à API do GitHub
            .then((response) => {
                return response.json() // Converte a resposta para JSON
            })
            .then((result) => {
                setSuggestions(result) // Atualiza o estado com os resultados
            })
            .catch((err) => {
                throw new Error(err) // Lança um erro caso a requisição falhe
            })
    }, []) // O array vazio indica que o efeito só deve ser executado uma vez na montagem do componente

    return (
        <div className="container-suggestion"> {/* Contêiner principal para sugestões */}
            <div className="header-suggestion"> {/* Cabeçalho com informações do usuário */}
                <img src={`https://github.com/yagolima1.png`} /> {/* Imagem de perfil do usuário */}

                <div className="user-infos-suggestion"> {/* Contêiner para as informações do usuário */}
                    <div className="infos"> {/* Informações do usuário */}
                        <span>yagolima1</span> {/* Nome de usuário */}
                        <p>Yago Gonçalves</p> {/* Nome completo do usuário */}
                    </div>
                    <button className="switch">Trocar</button> {/* Botão para trocar de conta */}
                </div>
            </div>

            <div className="header-main-suggestion"> {/* Cabeçalho principal para sugestões */}
                <p>Sugestões para você</p> {/* Título */}
                <span>Ver tudo</span> {/* Link para ver todas as sugestões */}
            </div>

            <div className="user-suggestion"> {/* Contêiner para a lista de sugestões */}
                {slice.map((suggestion, key) => ( // Mapeia as sugestões para exibir
                    <div className="infos-suggestion" key={key}> {/* Contêiner para cada sugestão */}
                        <img src={`https://github.com/${suggestion.login}.png`} /> {/* Imagem de perfil do usuário sugerido */}
                        <div className="info-suggestion"> {/* Informações do usuário sugerido */}
                            <span>{suggestion.login}</span> {/* Nome de usuário sugerido */}
                            <p>Sugerido para você</p> {/* Texto de sugestão */}
                        </div>
                        <button className='follow'>Seguir</button> {/* Botão para seguir o usuário sugerido */}
                    </div>
                ))}

            </div>

            <footer className="footer-suggestion"> {/* Rodapé com informações adicionais */}
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p> {/* Links de informações */}
                <p>&copy; 2024 Yago Gonçalves</p> {/* Direitos autorais */}
            </footer>
        </div>
    )
}
