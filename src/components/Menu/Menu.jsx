import React from "react";
import { NavLink } from "react-router-dom";
import './menu.scss';
import { Logo } from "../Logo/Logo";
export const Menu = ({ onScrollDown, reference: [about, service, gallery, location, footer] }) => {

    return (
        <header className="navbar">
            <div className="container">
                <nav className="navbar__nav">
                    <div className="navbar-logo">
                        <Logo />
                    </div>
                    <ul className="navbar__items">
                        <li className="navbar__item-list">
                            <NavLink className="navbar__link" to="/">Главная</NavLink>
                        </li>
                        <li className="navbar__item-list" >
                            <NavLink className="navbar__link" to="/about" onClick={() => onScrollDown(about)}>О Нас</NavLink>
                        </li>
                        <li className="navbar__item-list">
                            <NavLink className="navbar__link" to="/gallery" onClick={() => onScrollDown(gallery)}>Галерея</NavLink>
                        </li>
                        <li className="navbar__item-list">
                            <NavLink className="navbar__link" to="/service" onClick={() => onScrollDown(service)} >Услуги</NavLink>
                        </li>
                        <li className="navbar__item-list">
                            <NavLink className="navbar__link" to="/location" onClick={() => onScrollDown(location)}>Где находимся</NavLink>
                        </li>
                        <li className="navbar__item-list">
                            <NavLink className="navbar__link" to="/footer" onClick={() => onScrollDown(footer)}>Контакты</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>

    )
}