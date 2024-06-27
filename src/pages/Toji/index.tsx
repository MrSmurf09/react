import Styles from "./toji.module.css";
import video from "../../assets/GojovsToji_480.mp4";
import Navbar from "../../components/Navbar";

const Toji = () => {
  return (
    <div className={Styles.container}>
    <Navbar />
    <div className={Styles.align_info}>
        <div className={Styles.video_container}>
            <video controls src={video} autoPlay loop muted></video>
        </div>
        <div className={Styles.container_info}>
            <span>Toji vs Gojo</span>
            <p>La gran ballata entre el que nacio con restricción celestial del clan zenin, Toji Fushiguro y el hechicero más poderoso de la historia, Satoru Gojo.</p>
            <button className={Styles.botonir} id="botoin">Ir a la pagina oficial</button>
        </div>
        </div>
    </div>
  )
}

export default Toji
