import React, {useState} from 'react'
import s from './Form.module.scss';
import axios from "axios";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {SendMessageModal} from "./modal/SendMessageModal";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import WaveLoading from 'react-loadingg/lib/WaveLoading';

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
            {req && <WaveLoading style={{position: 'fixed', right: '50%', top: '50%'}} color={'#ffffff'}/>}
            <div className={s.sendMessageModal}>
                <SendMessageModal
                    icon={passedModal ? faCheck : failedModal ? faTimes : null}
                    title={passedModal ? 'Your message was sent.' : failedModal ? 'Your message was not sent.' : null}
                    text={passedModal ? 'Thank you.' : failedModal ? 'Try again later.' : null}
                    setActiveModal={passedModal ? setPassedModal : failedModal ? setFailedModal : null}
                    activeModal={passedModal || failedModal}
                />
            </div>

            <form className={s.form} onSubmit={formik.handleSubmit} noValidate>
                <div className={s.inputBlock}>
                    <input
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
                        placeholder={formik.touched.email && formik.errors.email ? formik.errors.email : 'example@gmail.com'}
                        {...formik.getFieldProps('email')}

                    />
                    {/*{formik.touched.email && formik.errors.email*/}
                    {/*&& <div>{formik.errors.email}</div>}*/}

                </div>

                <textarea
                    id='message'
                    placeholder={formik.touched.message && formik.errors.message ? formik.errors.message : 'Your message'}
                    {...formik.getFieldProps('message')}

                />
                {/*{formik.touched.message && formik.errors.message*/}
                {/*&& <div>{formik.errors.message}</div>}*/}

                <input className={s.btn}
                       type='submit'
                       value={'Send Message'}
                />

            </form>
        </>
    )
}