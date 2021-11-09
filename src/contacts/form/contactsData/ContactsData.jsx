import React from 'react'
import s from './ContactsData.module.scss';
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons';
import {DataBlock} from './dataBlock/DataBlock';


export const ContactsData = () => {

    const dataBlock = [
        {iconTitle: faTelegramPlane, contactTitle: 'Phone', data: '+375-29-599-54-66', a: 'tel:+375-29-599-54-66'},
        {iconTitle: faEnvelope, contactTitle: 'Email', data: 'martaveresovaa@gmail.com', a: ''},
        {iconTitle: faHome, contactTitle: 'My Location', data: 'Minsk, Belarus', a: ''},
    ]

    return (
        <div className={s.data}>
            {dataBlock.map(d => <DataBlock key={d.data}
                                           iconTitle={d.iconTitle}
                                           contactTitle={d.contactTitle}
                                           data={d.data}
                                           a={d.a}/>)}
        </div>
    );
}