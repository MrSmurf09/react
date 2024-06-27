import Styles from "./sukuna.module.css";
import video from "../../assets/SukunavsMahoraga_480.mp4";
import Navbar from "../../components/Navbar";

const Sukuna = () => {
  return (
    <div className={Styles.container}>
    <Navbar />
    <div className={Styles.align_info}>
        <div className={Styles.video_container}>
            <video controls src={video} autoPlay loop muted></video>
        </div>
        <div className={Styles.container_info}>
            <span>Sukuna vs Mahoraga</span>
            <p>La gran batalla entre el shikigami mas poderoso de megumi fushiguro, Mahoraga y el rey de las maldiciones, Ryomen Sukuna.</p>
            <button className={Styles.botonir} id="botoin">Ir a la pagina oficial</button>
        </div>
        </div>
    </div>
  )
}

export default Sukuna
