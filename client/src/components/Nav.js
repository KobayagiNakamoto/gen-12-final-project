import { Link } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import React from "react";

const Navigation = () => {
    return (
        <nav>
            <ul style={{ display: "flex", marginRight: "2rem" }}>
                <NavItem where={"/breakfast"} text={"Breakfast"} />
                <NavItem where={"/brunch"} text={"Brunch"} />
                <NavItem where={"/Lunch"} text={"Lunch"} />
                <NavItem where={"/Dinner"} text={"Dinner"} />
                {/* <div className="nav-item">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <span className="li-span"></span>
                </div>
                <div className="nav-item">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <span className="li-span"></span>
                </div>
                <div className="nav-item">
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <span className="li-span"></span>
                </div>
                <div className="nav-item">
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                    <span className="li-span"></span>
                </div> */}
            </ul>
        </nav>
    );
};

export default Navigation;
