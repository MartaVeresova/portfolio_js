import React from 'react'
import s from './DataBlock.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const DataBlock = ({iconTitle, contactTitle, data, a}) => {
    return (<div className={s.dataBlock}>
            <div className={s.icon}>
                <FontAwesomeIcon icon={iconTitle}/>
            </div>
            <div className={s.description}>
                <h4>{contactTitle}</h4>
                <a href={a}>{data}</a>
            </div>
        </div>
    );
}