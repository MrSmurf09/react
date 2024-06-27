import Navbar from '../../components/Navbar';
import video from "../../assets/Vivy_720.mp4";
import Styles from "./vivy.module.css";


const Vivy = () => {
  return (
    <div className={Styles.container}>
      <Navbar />
      <div className={Styles.align_info}>
        <div className={Styles.video_container}>
          <video controls src={video} autoPlay loop muted></video>
        </div>
        <div className={Styles.container_info}>
          <span>Vivy vs Kakitanai</span>
          <p>La gran batalla entre Vivy (Diva) y Yugo Kakitanai por el futuro del mundo</p>
          <button className={Styles.botonir} id="botoin">Ir a la pagina oficial</button>
        </div>
        </div>
    </div>
  )
}

export default Vivy
