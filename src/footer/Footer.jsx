import React from 'react';
import s from './Footer.module.scss';

export const Footer = () => {

    let items = [
        {href: 'https://t.me/Marta_4r78', title: 'telegram'},
        {href: 'https://www.linkedin.com/in/marta-veresova/', title: 'linkedIn'},
        {href: 'https://github.com/MartaVeresova', title: 'git'},
        {href: 'https://www.codewars.com/users/MartaVeresova', title: 'codewars'},
    ]

    return (
        <div className={s.footerBlock} id='footer'>
            <p className={s.rights}>©2021, All Rights Reserved.</p>
            <ul>
                {items.map((e, i) =>
                    <li key={i}>
                        <a href={e.href} target="_blank" rel="noreferrer">
                            {e.title}
                        </a>
                    </li>)}
            </ul>
        </div>
    );
}