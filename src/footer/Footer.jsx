import React from 'react';
import s from './Footer.module.scss';

export const Footer = () => {

    let items = [
        // {href: 'https://github.com/MartaVeresova', title: 'git'},
        {href: 'https://www.linkedin.com/in/marta-veresova/', title: 'linkedIn'},
        {href: 'https://martaveresovaa@gmail.com', title: 'email'},
        {href: 'https://www.instagram.com/martaveresova/', title: 'instagram'},
    ]

    return (
        <div className={s.footerBlock}>
            <p className={s.rights}>©2021 Все права защищены</p>
            <ul>
                {items.map((e, i) => <li key={i}><a href={e.href} target="_blank" rel="noreferrer">{e.title}</a></li>)}
            </ul>
        </div>
    );
}