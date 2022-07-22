import React, { useEffect, useState } from "react";
import './homepage.scss'
import { OpenMenuButton } from "../OpenMenuButton/OpenMenuButton";
import { Intro } from "../Intro/Intro";
import Zoom from 'react-reveal/Zoom';


export const HomePage = ({ toggleMenu, onScrollDown, refs : [about, home] }) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 1000)
        return clearTimeout()
    }, [])

    return (
        <section className="section main main_background" ref={home} >
            <OpenMenuButton toggleMenu={toggleMenu} />
            <div className="container container_main">
                {visible && <Zoom >
                    <Intro onScrollDown={onScrollDown} refs={about} />
                </Zoom>}



            </div>
        </section>
    )
}