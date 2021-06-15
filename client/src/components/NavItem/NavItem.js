import { useState } from "react";
import { Link } from "react-router-dom";
import style, { Green, Orange, Border } from "./Navitem.module.css";

const NavItem = ({ where, text, col, border }) => {
    let color = col === "green" ? Green : Orange;

    return (
        <div className={`${style.navItem} ${color} `}>
            <li>
                <Link
                    to={where}
                    className={`${style.navItemLink} ${border ? Border : ""}`}
                    style={{ color: col }}
                >
                    {text}
                </Link>
            </li>
            <span className={style.navItemSpan}>&nbsp;</span>
        </div>
    );
};

export default NavItem;
