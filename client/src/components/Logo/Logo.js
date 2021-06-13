import { Link } from "react-router-dom";
import style, { White } from "./Logo.module.css";

const Logo = ({ color }) => {
    return (
        <Link to="/" style={{ position: "relative", marginLeft: "30px" }}>
            <div className={`${style.Logo} ${color === "White" ? White : ""}`}>
                Baby's
            </div>
            <span className={style.Span}>food place</span>
        </Link>
    );
};

export default Logo;
