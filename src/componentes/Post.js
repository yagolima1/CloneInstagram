import barbudo from "../imagens/barbudo.jpg";
import { ImHeart } from "react-icons/im";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { HiMiniPaperAirplane } from "react-icons/hi2";

export default function Post() {

    return (
        <div className='Post'>

            <div className= "Post_cabecalho"> 
                <div className= "Post-avatar"></div>
                <div className= "Post-nome">Nome</div>
            </div>

            <div className="Post_conteudo">
               <img  src={barbudo} />
            </div>

            <div className="Post_rodape"> 
                <div className="Post_curtida">{ < ImHeart /> }</div>
                <div className="Post_comentario">{ < HiChatBubbleBottomCenter />}</div>
                <div className="Post_compartilhar">{ <HiMiniPaperAirplane />}</div>
            </div>

            <div className="caixinha">
                <div className="Usuario">Nome do usuario </div>
                <div  className="Legenda">: legenda</div>
            </div>

        </div>
    );
}