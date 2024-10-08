import logo from '../imagens/logo.webp';
import ListItem from './ListItem';

import { HiAnnotation } from "react-icons/hi";
import { FaHouseChimneyMedical } from "react-icons/fa6";

export default function ConteudoLateral() {
  return (
    <div className='ConteudoLateral'>
      <img src={logo} className='logo' alt='Logo' />

      <div>
        <ul className='menuLateral'>
          <ListItem texto='Home' icone={
            <FaHouseChimneyMedical style={{color:"red", fontSize:"40px", margin:"8px"}} />
          } 
          />
          <ListItem texto="Pesquisa" icone="Lupa"/>
          <ListItem icone="Buss" texto="Explorar"/>
          <ListItem texto="Mensagens" icone={<HiAnnotation />} />
          <ListItem icone="Coração" texto="Notificações" />
          <ListItem texto="Perfil" icone="Perfil"/>
          <ListItem texto="Mais" icone="Mais"/>
        </ul>
      </div>
    </div>
  );
}