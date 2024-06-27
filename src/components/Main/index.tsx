import { Link } from 'react-router-dom';
import Styles from './main.module.css';
import { PublicRoutes } from '../../models/routes.model';



const Main = () => {
  return (
    <div className={Styles.principal}>
      <section className={Styles.articulo_principal}>
      <img src="https://i.postimg.cc/4xdmGjRs/jujutsufondo.jpg" alt="" />
      <div className={Styles.contenido}>
        <h1>Las mejores peleas de jujutsu Kaisen</h1>
        <div className={Styles.contenido_column}>
          <p>En esta pagina se mostraran las que a mi parecer son de las mejores peleas de jujutsu kaisen, mencion honorifica a la pelea entre Vivy (Diva) y Yugo Kakitanai de Vivy -Fluorite Eye's Song.</p>
          <button><Link to={PublicRoutes.Vivy} className={Styles.link}>Ir a ver</Link></button>
        </div>
      </div>
    </section>
    <aside>
    <div className={Styles.nuevos_articulos}>
      <h2>New</h2>
      <ul>
        <li>
          <Link to={PublicRoutes.Gojo} className={Styles.link}>Gojo vs Sukuna</Link>
          <p>La gran batalla entre el rey de las maldiciones, Ryomen Sukuna y el hechicero más poderoso de la historia, Satoru Gojo.</p>
        </li>
        <li>
        <Link to={PublicRoutes.Sukuna} className={Styles.link}>Sukuna vs Mahoraga</Link>
          <p>La gran batalla entre el shikigami mas poderoso de megumi fushiguro, Mahoraga y el rey de las maldiciones, Ryomen Sukuna.</p>
        </li>
        <li>
        <Link to={PublicRoutes.Toji} className={Styles.link}>Toji vs Gojo</Link>
          <p>La gran ballata entre el que nacio con restricción celestial del clan zenin, Toji Fushiguro y el hechicero más poderoso de la historia, Satoru Gojo.</p>
        </li>
      </ul>
    </div>
  </aside>
    </div>
  );
};

export default Main;
