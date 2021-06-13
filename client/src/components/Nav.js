import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
    return (
        <nav>
            <ul style={{ display: "flex", marginRight: "2rem" }}>
                <div className="nav-item">
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
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
