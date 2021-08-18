import React from 'react'
import s from './Form.module.scss';


export const Form = () => {
    return (
        <form className={s.form}>
            <div className={s.inputBlock}>
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Email"/>
            </div>
            <textarea placeholder="Your Message"/>
            <button className={s.btn} type='submit'>
                Send Message
            </button>
        </form>
    )
}