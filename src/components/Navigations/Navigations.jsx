import {NavLink } from "react-router-dom";

import css from './Navigations.module.css'

export default function Navigations() {

    return (
        <nav className={css.mainNav} >
        <NavLink className={css.btn} to='/'>Home</NavLink>
        <NavLink className={css.btn} to='/movies'>Movies</NavLink>
      </nav>
    )
}