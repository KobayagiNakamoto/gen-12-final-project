import { Link } from "react-router-dom";
import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    //Stil za kopcinja na linkovi
    const linkStyle = {
        color: "gray",
        fontSize: "20px",
    };

    return (
        <div style={{ display: "flex",justifyContent:"space-around", alignItems: "baseline" }}>
            <Logo />
            <Nav />
        </div>
    );
};

export default Header;

// <div class="container-fluid d-inline-flex">

//     {/* Kod za dropdown meni, se uste ne e dosreden*/}
//     <button class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
//         <span class="navbar-toggler-icon"></span>
//     </button>

//     {/* Logo */}
//     <a class="navbar-brand" href="/"><img src="https://i.pinimg.com/236x/cd/b6/cf/cdb6cfefa9df5759e1dbd2dd76f6b921--classic-simple.jpg" width="50px" height="50px"></img></a>

//     <div class="container-fluid ">
//         <nav class="navbar navbar-expand-sm justify-content-center p-3">
//             <ul class="navbar-nav" style={{ display: "flex"}}>
//                 <li class="nav-item">
//                     <a class="nav-link" style={linkStyle} href="/">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" style={linkStyle} href="/login">Login</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" style={linkStyle} href="/register">Register</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" style={linkStyle} href="/create">Create</a>
//                 </li>
//             </ul>
//         </nav>
//     </div>
//     <div class="p-3">
//         <button type="button" class="btn btn-primary">Button</button>
//     </div>
// </div>
