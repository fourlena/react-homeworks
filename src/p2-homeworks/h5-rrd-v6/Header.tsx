import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.wrapper}>
            <div className={s.links}>
                <NavLink  to={PATH.PRE_JUNIOR} className={el => el.isActive ?  s.active : s.link} >pre-junior</NavLink>
                <NavLink  to={PATH.JUNIOR} className={el => el.isActive ?  s.active : s.link}>junior</NavLink>
                <NavLink  to={PATH.JUNIOR_PLUS} className={el => el.isActive ?  s.active : s.link}>junior+</NavLink>
            </div>
            <button className={s.button}> click </button>
        </div>
    )
}

export default Header
