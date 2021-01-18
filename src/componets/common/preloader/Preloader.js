import css from "./Preloader.module.css";
import preloader from "../../../assets/prelouder.png";

let Preloader = () => {
    return (
        <img className={css.preloader} src={preloader}/>
    )
}

export default Preloader;