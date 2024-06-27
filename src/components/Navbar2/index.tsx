import { PublicRoutes, SubMenuRoutes } from "../../models/routes.model";
import Styles from "./navbar2.module.css";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className={Styles.header}>
        <span className={Styles.titulo}>Jujutsu Kaisen</span>
        <div className={Styles.navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="">New</Link></li>
                <li>
                  <Link to="">Popular</Link>
                  <ul>
                    <li><Link to="">Kaiju n°8</Link></li>
                    <li><Link to="">Gachiakuta</Link></li>
                    <li><Link to={`${PublicRoutes.HOME}${SubMenuRoutes.Hells_Paradise}`}>Hells Paradide</Link></li>
                  </ul>
                </li>
                <li><Link to="">Trending</Link></li>
                <li><Link to="">Categories</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar2
