import { arrowLeft } from "../../../images/icons";
import { arrowRight } from "../../../images/icons";
export const ButtonSlider = ({ moveSlide, direction }) => {
    return (
        <button
        onClick={moveSlide}
            className={direction ==='next'?'btn-slide next': 'btn-slide prev'}
        >
            <img src={direction === "next" ? arrowRight : arrowLeft} />
        </button>
    )
}