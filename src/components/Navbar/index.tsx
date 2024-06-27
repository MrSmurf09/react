import { useState } from 'react';
import Styles from "./navbar.module.css";
import Logo_Jujutsu from "../../assets/Jujutsu_Kaisen_logo.png";
import { Link } from 'react-router-dom';
// import { PublicRoutes } from '../../models/routes.model';

const Navbar = () => {

  const [menuVisible, setMenuVisible] = useState(false);

  const Menu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
      <nav>
        <img src={Logo_Jujutsu} alt="" />
            <button className={Styles.menu_des} onClick={Menu}>Menu</button>
            <ul className={`${Styles.menu_2} ${menuVisible ? '' : Styles.desaparecer}`}>
                <li  className={`${Styles.menu} ${menuVisible ? '' : Styles.desaparecer}`}><Link className={Styles.link} to="/">Inicio</Link></li>
                <li className={`${Styles.menu} ${menuVisible ? '' : Styles.desaparecer}`}>Nosotros</li>
                <li className={`${Styles.menu} ${Styles.boton} ${menuVisible ? '' : Styles.desaparecer}`}>Iniciar sesión</li>
            </ul>
      </nav>
  )
}

export default Navbar