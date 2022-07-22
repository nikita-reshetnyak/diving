import React, { useState } from "react";
import { ButtonSlider } from "./ButtonSlider/ButtonSlider";
import './slider.scss';
import { photos } from "../../images/gallery";


export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const prevSlide = () => {
        const res = activeIndex ? activeIndex - 1 : photos.length - 1;
        setActiveIndex(res)
    };
    const nextSlide = () => {
        const res = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(res)
    }
    const prevImgIndex = activeIndex ? activeIndex - 1 : photos.length - 1
    const nextImgIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1

    return (
        <div className="slider-wrapper">
            <div className="slider">
                <div className="slider__item slider-img-prev" key={prevImgIndex}>
                    {photos[prevImgIndex]}
                </div>
                <div className="slider__item" key={activeIndex}>
                    {photos[activeIndex]}
                </div>
                <div className="slider__item slider-img-next" key={nextImgIndex}>
                    {photos[nextImgIndex]}
                </div>


            </div>
            <ButtonSlider moveSlide={prevSlide} direction={'prev'} />
            <ButtonSlider moveSlide={nextSlide} direction={'next'} />
        </div>

    )
}