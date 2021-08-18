import React, {useState} from 'react'
import s from './BurgerMenu.module.scss'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Menu} from "./menu/Menu";


export const BurgerMenu = ({items}) => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div>
            <div className={s.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <Menu items={items} header={'menu'} active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}