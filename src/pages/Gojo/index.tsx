import Styles from "./gojo.module.css";
import video from "../../assets/GojovsSukuna_480.mp4"
import Navbar from "../../components/Navbar";

const Gojo = () => {
return (
    <div className={Styles.container}>
    <Navbar />
    <div className={Styles.align_info}>
        <div className={Styles.video_container}>
            <video controls src={video} autoPlay loop muted></video>
        </div>
        <div className={Styles.container_info}>
            <span>Gojo vs Sukuna</span>
            <p>La gran batalla entre el rey de las maldiciones, Ryomen Sukuna y el hechicero más poderoso de la historia, Satoru Gojo</p>
            <button className={Styles.botonir} id="botoin">Ir a la pagina oficial</button>
        </div>
        </div>
    </div>
)
}

export default Gojo
