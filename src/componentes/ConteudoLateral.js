import logo from '../imagens/Logo.png';
import ListItem from './ListItem';
import { FaHouse } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbBrandSafari } from "react-icons/tb";



export default function ConteudoLateral() {
  return (
    <div className='ConteudoLateral'>
      <img src={logo} className='logo' alt="logo" />


      <div>
        <ul className='menulateral'>

        <ListItem texto='Home' icone= {<FaHouse/>}/>
        <ListItem texto='Pesquisa' icone={<FaMagnifyingGlass />}/>
        <ListItem texto='Explorer' icone={<TbBrandSafari />}/>
        <ListItem texto='Mensagens' icone={<IoChatbox />}/>
        <ListItem texto='Notificacaçao' icone={<FaHeart />}/>
        <ListItem texto='Perfil' icone={<CgProfile />}/>
        <ListItem texto='Mais' icone={<FcSettings />}/>
      
        </ul>

      </div>

    </div>
  )
}