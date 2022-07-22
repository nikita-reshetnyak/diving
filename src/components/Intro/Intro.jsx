import React from "react";
import { Link } from "react-router-dom";
import './intro.scss';

export const Intro = ({ onScrollDown, refs }) => {

    return (
        <div className='intro'>
            <div className="intro__block">
                <Link to='/about' onClick={() => onScrollDown(refs)}>Узнать подробнее</Link>
            </div>

        </div>
    )
}