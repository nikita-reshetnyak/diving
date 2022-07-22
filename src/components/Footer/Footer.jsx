import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo/logo.jpg';
import { instIcon } from '../../images/icons';
import { whatsUpIcon } from '../../images/icons';
import './footer.scss'
import { Logo } from '../Logo/Logo';
export const Footer = ({ refs, onScrollDown, reference: [about, service, gallery, home] }) => {
    return (
        <footer className="footer " ref={refs}>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-wrapper__item">
                        <div className="footer-logo">
                            <Logo />
                        </div>
                        <span className='footer-wrapper__subtext'>Дайвинг-Клуб <span>Barracuda</span></span>
                        <span  className='footer-wrapper__address'>Анапа, ул.Ленина 1</span>
                        <div className="footer-wrapper__social">
                            <span className='social-icon'>
                                <a href="https://www.instagram.com/accounts/login/?next=/dive_anapa/">
                                    <img src={instIcon} alt="" />
                                </a>
                            </span>
                            <span className='social-icon'>
                                <a href="https://api.whatsapp.com/send/?phone=79180673757">
                                    <img src={whatsUpIcon} alt="" />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="footer-wrapper__item">
                        <h3 className='footer-wrapper__title'>Карта сайта</h3>
                        <div className="footer-menu">
                            <ul className='footer-menu__item'>
                                <li className="footer-menu__list">
                                    <NavLink className="footer-menu__link" to="/" onClick={() => onScrollDown(home)}>Главная</NavLink>
                                </li>
                                <li className="footer-menu__list" >
                                    <NavLink className="footer-menu__link" to="/about" onClick={() => onScrollDown(about)}>О Нас</NavLink>
                                </li>
                                <li className="footer-menu__list">
                                    <NavLink className="footer-menu__link" to="/gallery" onClick={() => onScrollDown(gallery)}>Галерея</NavLink>
                                </li>
                                <li className="footer-menu__list">
                                    <NavLink className="footer-menu__link" to="/service" onClick={() => onScrollDown(service)} >Услуги</NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="footer-wrapper__item">
                        <h3 className='footer-wrapper__title'>
                            Есть вопросы ?
                        </h3>
                        <div className='footer-wrapper__tel'>
                            <a href="tel:+79180673757">+7(918)067-37-57</a>
                            <a href="tel:+79181668499">+7(918)166-84-99</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}