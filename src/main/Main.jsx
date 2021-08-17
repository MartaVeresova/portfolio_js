import React from 'react';
import s from './Main.module.scss';
import photo from '../assets/images/photo.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock} id="home">
            <div className={s.container}>
                <div className={s.greeting}>
                    <h5>Hello, my name is</h5>
                    <h1>Marta Veresova</h1>
                    <h5>Front-end Developer based in #Minsk</h5>
                </div>

                <div className={s.photo}>
                    <img src={photo} alt={'it\'s me'}/>
                </div>
            </div>
        </div>
    );
}

