import React from 'react'
import s from './SendMessageModal.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const SendMessageModal = ({icon, title, text, setActiveModal, activeModal}) => {

    const onClickHandler = () => setActiveModal(false)
    const onClickStopPropagation = e => e.stopPropagation()

    return (
        <div className={s.modalContainer}>
            <div className={`${activeModal ? `${s.modal} ${s.modalActive}` : s.modal}`} onClick={onClickHandler}>
                <div className={`${activeModal ? `${s.modalContent} ${s.activeContent}` : s.modalContent}`}
                     onClick={onClickStopPropagation}>
                    <div className={s.header}>
                        <h4>
                            <FontAwesomeIcon className={s.icon} icon={icon}/>{title}
                        </h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}