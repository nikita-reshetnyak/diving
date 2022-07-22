import React from "react";
import img1 from '../../images/gallery/img1.jpg'
import img2 from '../../images/gallery/img2.jpg'
import img3 from '../../images/gallery/img3.jpg'
import './about.scss';

export const AboutUs = ({ refs }) => {



    return (
        <section className="section about-section " ref={refs} >
            <div className="container">
                <div className="about-section__about">
                    <div className="about-section__text">
                        <h2 className="main-title ">Дайвинг-центр <span>Barracuda</span>  </h2>
                        <div className="about-section__text-block text-block">
                            <p>Наш дайвинг центр располагается в морском порту Анапы. Ваша пешая прогулка до морского вокзала будет проходить по курортной зоне города. Наш центр расположен в самом начале порта, поэтому большинство путей ведут к нам. Проще всего двигаться по улице Ленина по направлению убывания нумерации домов. Приятные ощущения и оздоровление вам точно гарантированы.
                               
                            </p>
                        </div>

                    </div>
                    <div className="about-section__images">
                        <div className="about-section__image">
                            <img src={img1} alt="" />
                        </div>
                        <div className="about-section__image">
                            <img src={img2} alt="" />
                        </div>
                        <div className="about-section__image">
                            <img src={img3} alt="" />
                        </div>

                    </div>
                </div>



            </div>
        </section>

    )
}