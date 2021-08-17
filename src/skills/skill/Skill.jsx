import React from 'react';
import s from './Skill.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Skill = ({title, description, titleIcon}) => {
    return (
        <div className={s.skill}>
            <div className={s.image}>
                <FontAwesomeIcon icon={titleIcon} className={s.icon}/>
            </div>
            <h5>{title}</h5>
            <hr className={s.hR}/>
            <p>{description}</p>
        </div>
    );
}

