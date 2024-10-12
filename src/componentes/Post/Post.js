import './Post.css'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { IconContext } from 'react-icons';
import { BsEmojiLaughing } from "react-icons/bs";

export function Post (){

    return (

    <>
        <header className='header-post'>

            <div className="usuario">
                <img className='imagem-post' src="https://i.pinimg.com/564x/b1/3f/e1/b13fe1c2cf34e29282aa89391ff37214.jpg" alt='foto-de-perfil' />

                <p>Alexandra Puls</p>
            </div>

            <p>...</p>
        </header>

        <div className='foto-post'>
            <img src="https://peopleinlaw.co.uk/wp-content/uploads/2021/04/shutterstock_113828068-612x460.jpeg" alt='foto-do-post' />
        </div>

        <div className='descricao-post'>

            <IconContext.Provider value={{size: "30px"}}>

                <section className='postagem-desc'>

                    <div className='icones'>

                        <div className='icone'><IoMdHeartEmpty/></div>

                        <div className='icone'><BsChat/></div>

                        <div className='icone'><FiSend/></div>
            
                    </div>

                        <div className='icone'><BsBookmark/></div>

                </section>

            </IconContext.Provider> 

               <section className='like'>
                    <span>1.2k curtidas</span>
                </section>

                <div className='legenda'>
                    <p>
                        <strong>Alexandra Puls</strong> Cada rua conta uma história, cada edifício guarda memórias. Às vezes, tudo que precisamos é parar e observar a beleza escondida nas linhas da cidade. 🌆✨ #CidadeQueInspira #HistóriasUrbanas
                    </p>    
                </div>

                <div className='tempo-post'>
                    <time>Há 19 minutos</time>
                </div>

                <div className='comentar'>

                    <div className='comentar-fake'>

                    <IconContext.Provider  value={{size: "25px"}}>

                        <div className='icone'>
                            <BsEmojiLaughing/>                                     
                        </div>

                    </IconContext.Provider>

                    <input  type="text" placeholder='Comente...'/>
                
                    </div>

                    <button>Enviar</button>

                </div>

                

        </div>

        <header className='header-post'>

            <div className="usuario">
                <img className='imagem-post' src="https://img.freepik.com/fotos-premium/blausee-mit-forelle-berner-oberland-schweiz-alemanha_1346034-22138.jpg" alt='foto-de-perfil' />

                <p>Leonardo Riverstone</p>
            </div>

            <p>...</p>
        </header>

        <div className='foto-post'>
            <img src="https://mcmahongroup.com/_site/wp-content/uploads/2021/04/CL41-612x460.jpg" alt='foto-do-post' />
        </div>

        <div className='descricao-post'>

            <IconContext.Provider value={{size: "30px"}}>

                <section className='postagem-desc'>

                    <div className='icones'>

                        <div className='icone'><IoMdHeartEmpty/></div>

                        <div className='icone'><BsChat/></div>

                        <div className='icone'><FiSend/></div>
            
                    </div>

                        <div className='icone'><BsBookmark/></div>

                </section>

            </IconContext.Provider> 

               <section className='like'>
                    <span>812 curtidas</span>
                </section>

                <div className='legenda'>
                    <p>
                        <strong>Leonardo Riverstone</strong> Caminhando por florestas preservadas, me pergunto: o que mais podemos fazer para salvar nosso planeta? 🌍💚 Cada passo é uma nova chance. #Sustentabilidade #AmorPelaNatureza
                    </p>    
                </div>

                <div className='tempo-post'>
                    <time>Há 44 minutos</time>
                </div>

                <div className='comentar'>

                    <div className='comentar-fake'>

                    <IconContext.Provider  value={{size: "25px"}}>

                        <div className='icone'>
                            <BsEmojiLaughing/>                                     
                        </div>

                    </IconContext.Provider>

                    <input  type="text" placeholder='Comente...'/>
                
                    </div>

                    <button>Enviar</button>

                </div>

                

        </div>

        <header className='header-post'>

            <div className="usuario">
                <img className='imagem-post' src="https://i.pinimg.com/236x/92/af/85/92af85f3a1e680f1b6c9527fd485467e.jpg" alt='foto-de-perfil' />

                <p>Rodri</p>
            </div>

            <p>...</p>
        </header>

        <div className='foto-post'>
            <img src="https://betting.cdnppb.net/pt/gettyimages-1847441792-612x612.612x460.jpeg" alt='foto-do-post' />
        </div>

        <div className='descricao-post'>

            <IconContext.Provider value={{size: "30px"}}>

                <section className='postagem-desc'>

                    <div className='icones'>

                        <div className='icone'><IoMdHeartEmpty/></div>

                        <div className='icone'><BsChat/></div>

                        <div className='icone'><FiSend/></div>
            
                    </div>

                        <div className='icone'><BsBookmark/></div>

                </section>

            </IconContext.Provider> 

               <section className='like'>
                    <span>278k curtidas</span>
                </section>

                <div className='legenda'>
                    <p>
                        <strong>Rodri</strong> Hoje foi dia de batalha em campo contra os Spurs! Cada jogo é uma oportunidade de dar o meu melhor, de representar essa camisa com orgulho e de mostrar todo o trabalho duro que existe por trás de cada lance. A luta é constante, mas é por isso que amo esse esporte. Seguimos juntos, rumo a novas conquistas! 💙⚽ #ManchesterCity #PremierLeague #FutebolÉPaixão
                    </p>    
                </div>

                <div className='tempo-post'>
                    <time>Há 3 horas</time>
                </div>

                <div className='comentar'>

                    <div className='comentar-fake'>

                    <IconContext.Provider  value={{size: "25px"}}>

                        <div className='icone'>
                            <BsEmojiLaughing/>                                     
                        </div>

                    </IconContext.Provider>

                    <input  type="text" placeholder='Comente...'/>
                
                    </div>

                    <button>Enviar</button>

                </div>

                

        </div>

        <br></br>

        <header className='header-post'>

            <div className="usuario">
                <img className='imagem-post' src="https://i.pinimg.com/originals/b7/cc/f7/b7ccf7b3812172fc8c93eefa5138f395.png" alt='foto-de-perfil' />

                <p>Linkin Park</p>
            </div>

            <p>...</p>
        </header>

        <div className='foto-post'>
            <img src="https://www.012news.com.br/wp-content/uploads/2023/06/numb-linkin-park-1-bilhao-views-youtube-758x570-1-612x460.webp" alt='foto-do-post' />
        </div>

        <div className='descricao-post'>

            <IconContext.Provider value={{size: "30px"}}>

                <section className='postagem-desc'>

                    <div className='icones'>

                        <div className='icone'><IoMdHeartEmpty/></div>

                        <div className='icone'><BsChat/></div>

                        <div className='icone'><FiSend/></div>
            
                    </div>

                        <div className='icone'><BsBookmark/></div>

                </section>

            </IconContext.Provider> 

               <section className='like'>
                    <span>108k curtidas</span>
                </section>

                <div className='legenda'>
                    <p>
                        <strong>Linkin Park</strong> A música sempre foi nosso espaço para expressar o que às vezes as palavras não conseguem. Cada nota, cada letra, cada show é uma conexão profunda com vocês, nossos fãs. Vocês são o motivo pelo qual continuamos a criar e a nos reinventar. Obrigado por estarem nessa jornada com a gente—juntos somos mais fortes. 🎤🔥 #LinkinPark #MúsicaQueNosUne #SempreConectados
                    </p>    
                </div>

                <div className='tempo-post'>
                    <time>Há 1 dia</time>
                </div>

                <div className='comentar'>

                    <div className='comentar-fake'>

                    <IconContext.Provider  value={{size: "25px"}}>

                        <div className='icone'>
                            <BsEmojiLaughing />                                     
                        </div>

                    </IconContext.Provider>

                    <input  type="text" placeholder='Comente...'/>
                
                    </div>

                    <button>Enviar</button>

                </div>

                

        </div>
    </>

    )
}