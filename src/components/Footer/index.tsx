
import { Link } from 'react-router-dom';
import Styles from './footer.module.css';
import { PublicRoutes } from '../../models/routes.model';

const Footer = () => {
  return (
    <footer>
      <div className={Styles.articulos_footer}>
        <div className={Styles.articulo}>
          <Link to={PublicRoutes.Gojo}><img  src="https://i.postimg.cc/3N7zDPCT/sukuna-vs-gojo-manga-panel.jpg" alt="" /></Link>
          <h3>Gojo vs Sukuna</h3>
          <p>La gran batalla entre el rey de las maldiciones, Ryomen Sukuna y el hechicero más poderoso de la historia, Satoru Gojo.</p>
        </div>
        <div className={Styles.articulo}>
        <Link to={PublicRoutes.Sukuna}><img  src="https://i.postimg.cc/hjtQSqP0/sukuna-vs-mahoraga.jpg" alt="" /></Link>
          <h3>Sukuna vs Mahoraga</h3>
          <p>La gran batalla entre el shikigami mas poderoso de megumi fushiguro, Mahoraga y el rey de las maldiciones, Ryomen Sukuna.</p>
        </div>
        <div className={Styles.articulo}>
        <Link to={PublicRoutes.Toji}><img  src="https://i.postimg.cc/X7QhJf8c/gojovuela.png" alt="" /></Link>
          <h3>Toji vs Gojo</h3>
          <p>La gran ballata entre el que nacio con restricción celestial del clan zenin, Toji Fushiguro y el hechicero más poderoso de la historia, Satoru Gojo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
