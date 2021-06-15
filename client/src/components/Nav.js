import NavItem from "./NavItem/NavItem";
import React from "react";

const Navigation = () => {
    return (
        <nav>
            <ul style={{ display: "flex", marginRight: "2rem" }}>
                <NavItem where={"/breakfast"} text={"Breakfast"} />
                <NavItem where={"/brunch"} text={"Brunch"} />
                <NavItem where={"/lunch"} text={"Lunch"} />
                <NavItem where={"/dinner"} text={"Dinner"} />
            </ul>
        </nav>
    );
};

export default Navigation;
