import React from 'react'
import s from './Button.module.scss';


export const Button = ({title, click}) => {
    return <div>
        <button className={s.button} onClick={click}>
            {title}
        </button>
    </div>
}