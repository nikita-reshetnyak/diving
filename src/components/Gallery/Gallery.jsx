import React from "react";
import { Slider } from "../Slider/Slider";


import './gallery.scss'
export const Gallery = ({ refs }) => {
    return (
        <section className="section gallery-section" ref={refs}>
            <div className="container">
                <div className="gallery-section__text">
                    <h2 className="main-title">
                        Наша Галерея
                    </h2>
                    <p className="gallery-section__text-block text-block">
                        Попробуй дайвинг в сопровождении персонального инструктора .Если ты мечтаешь погружаться и исследовать моря и океаны, запишись на курс дайвинга и открой для себя мир приключений. Мы организовали пробное погружение, чтобы каждый мог попробовать дайвинг независимо от возраста и навыков плавания.
                    </p>
                </div>
                <Slider />

            </div>
        </section>
    )
}