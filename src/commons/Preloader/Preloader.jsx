import { preloader } from "../../images/icons";
import './preloader.scss'

export const Preloader =()=>{
    return (
        <div className="preloader-wrapper">
            <img src={preloader} alt="" />
        </div>
    )
}