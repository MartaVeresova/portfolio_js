import React, {useState} from 'react'
import s from './Form.module.scss';
import axios from "axios";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {SendMessageModal} from "./modal/SendMessageModal";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import { CircleToBlockLoading } from 'react-loadingg';


export const Form = () => {

    const [passedModal, setPassedModal] = useState(false)
    const [failedModal, setFailedModal] = useState(false)
    const [req, setReq] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .required('Message is required'),
        }),
        onSubmit: values => {
            setReq(true)
            axios.post('http://smtp-nodejs-server-gmail-form.herokuapp.com/sendMessage', values)
                .then(() => {
                    setPassedModal(true)
                })
                .catch(() => {
                    setFailedModal(true)
                })
                .finally(() => {
                    setReq(false)
                })
            formik.resetForm()
        },
    })


    return (
        <>

            <div className={s.sendMessageModal}>
                {req &&  <CircleToBlockLoading style={{color: 'white'}}/>}
                {
                    passedModal &&
                    <SendMessageModal
                        icon={faCheck}
                        title='Your message was sent.'
                        text='Thank you.'
                        setActiveModal={setPassedModal}
                        activeModal={passedModal}
                    />
                }
                {
                    failedModal &&
                    <SendMessageModal
                        icon={faTimes}
                        title='Your message was not sent.'
                        text='Try again later.'
                        setActiveModal={setFailedModal}
                        activeModal={failedModal}
                    />
                }

            </div>

            <form className={s.form} onSubmit={formik.handleSubmit} noValidate>
                <div className={s.inputBlock}>
                    <input
                        // required
                        // pattern="[A-Z, a-z, А-Я, а-я]{2,20}"
                        id='name'
                        type='text'
                        placeholder={formik.touched.name && formik.errors.name ? formik.errors.name : 'Your Name'}
                        {...formik.getFieldProps('name')}
                    />
                    {/*{formik.touched.name && formik.errors.name*/}
                    {/*&& <div className={s.inputError}>{formik.errors.name}</div>}*/}

                    <input
                        id='email'
                        type='email'
                        placeholder='example@gmail.com'
                        {...formik.getFieldProps('email')}

                    />
                    {/*{formik.touched.email && formik.errors.email*/}
                    {/*&& <div>{formik.errors.email}</div>}*/}

                </div>

                <textarea
                    id='message'
                    placeholder='Your Message'
                    {...formik.getFieldProps('message')}

                />
                {/*{formik.touched.message && formik.errors.message*/}
                {/*&& <div>{formik.errors.message}</div>}*/}

                <button className={s.btn}
                        type='submit'
                        disabled={!formik.isValid}
                >
                    Send Message
                </button>
            </form>
        </>
    )
}