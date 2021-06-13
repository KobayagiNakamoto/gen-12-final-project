import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
    return (
        <nav>
            <ul style={{ display: "flex", marginRight: "2rem" }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/create">Create</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Login;
