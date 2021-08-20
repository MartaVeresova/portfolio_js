import React from 'react';
import s from './Contacts.module.scss';
import {Title} from '../common/components/title/Title';
import {Form} from './form/form/Form';
import {ContactsData} from './form/contactsData/ContactsData';


export const Contacts = () => {
    return (
        <div className={s.contactsBlock} id='contacts'>
            <div className={s.contactsContainer}>
                <Title text={'GET IN TOUCH'}/>
                <div className={s.formAndData}>
                    <ContactsData/>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

