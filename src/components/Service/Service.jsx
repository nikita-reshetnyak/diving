import React from "react";
import './service.scss';


export const Service = ({ refs }) => {

    return (
        <section className=" service-section bg-holder " ref={refs} >
            <div className="container">
                <div className="service-section__descr ">

                    <div className="service-section__text ">

                        <h2 className="main-title color-white">Наша работа</h2>
                        <div className="service-section__text-block text-block ">
                            <p> Выезды на погружения совершаем в приятной дружеской атмосфере, без суеты и спешки. Вместе с нашими дайверами выбираем место погружения в зависимости от подготовки и опыта дайверов.
                                На выбор дайверам предоставляется множество погружений разного уровня. Каждый день мы делим дайверов на небольшие группы и отправляемся в самые красивые места на дно Черного моря, куда совершаем погружения как с берега, так и с лодки.

                            </p>
                        </div>
                        <div className="service-section__price-block">
                            <div className="service-section__price-block-item">
                                <span>1900</span> руб - 1,5 часa
                            </div>
                            <div className="service-section__price-block-item">
                                <span>600 </span>руб - фото и видео
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}