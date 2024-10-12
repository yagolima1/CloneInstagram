import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { MdAlternateEmail } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

import './estilos.css'

export function Header() {

    return (
        <header className="header" >

            <div className="container" >

                <img className="logo" src="https://www.pngall.com/wp-content/uploads/15/Instagram-White-PNG.png" alt="Logo" />

                <div className="input-fake">

                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    
                    <input type='text' placeholder="Pesquisar" />

                </div>

                <div className="menu-icons" >
                    <IconContext.Provider value={{ color: "#fff",size: '26px' }}>

                        <div>
                            <AiFillHome />
                        </div>

                        
                        <div>
                            <RiMessengerLine />
                        </div>

                        <div>
                            <BsPlusSquare />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <BiMoviePlay />
                        </div>

                        <div>
                            <FiHeart />
                        </div>

                        <div>
                            <MdAlternateEmail />
                        </div>
                        

                    </IconContext.Provider>
                    <img className="img-user" src="https://github.com/yagolima1.png" alt="foto-de-perfil" />
                </div>

            </div>

        </header>
    )

}