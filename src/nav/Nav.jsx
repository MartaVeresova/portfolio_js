import React from 'react';
import s from './Nav.module.scss';
import {Link} from "react-scroll";

export const Nav = () => {

    const items = ['home', 'skills', 'projects', 'contacts']

    return (
        <div className={s.nav}>
            <div className={s.container}>
                {items.map((item, index) =>
                    <Link
                        key={index}
                        className={s.link}
                        activeClass={s.active}
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-99}
                        duration={500}
                    >
                        {item}
                    </Link>
                )}
                {/*<BurgerMenu items={items}/>*/}
            </div>
        </div>
    );
}

