import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Logo/Logo";
import Nav from "./Nav";
import NavItem from "./NavItem/NavItem";
import Button from "./Button/Button";
import style from "./Header.module.css";
import { useState } from "react";

const Header = () => {
    const [user, setUser] = useState(true);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
            }}
        >
            <Logo />
            <Nav />
            {user ? (
                <ul style={{ display: "flex", marginRight: "40px" }}>
                    <NavItem
                        className={style.Border}
                        where={"/myrecipes"}
                        text={"My Recipies"}
                        col={"green"}
                        border={true}
                    />
                    <NavItem
                        where={"/myprofile"}
                        text={"My Profile"}
                        col={"orange"}
                        border={true}
                    />
                    <NavItem where={"/lunch"} text={"Log Out"} border={true} />
                </ul>
            ) : (
                <div className="header-btn">
                    <Button btn={"White"} text={"Sing In"} where={"login"} />
                    <Button
                        btn={"Green"}
                        text={"Create Account"}
                        where={"register"}
                    />
                </div>
            )}
            {/* <div className="header-btn">
                <Button btn={"White"} text={"Sing In"} where={"login"} />
                <Button
                    btn={"Green"}
                    text={"Create Account"}
                    where={"register"}
                />
            </div> */}
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
