import React from 'react';
import s from './Project.module.scss';
import Slide from "react-reveal/Slide";


export const Project = ({img, description, link, title}) => {
    return (
        <Slide bottom cascade>
            <div className={s.project}>
                <div className={s.imgBlock} style={{backgroundImage: `url(${img})`}}>
                    <div className={s.overlay}>
                        <div className={s.descriptionBlock}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <a href={link} className={s.btn} target="_blank" rel="noreferrer">view project</a>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

