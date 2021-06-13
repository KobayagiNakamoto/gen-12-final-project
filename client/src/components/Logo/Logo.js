import { Link } from "react-router-dom";
import style from "./Logo.module.css";

const Logo = () => {
    return (
        <Link to="/" style={{ position: "relative" }}>
            <div className={style.Logo}>Baby's</div>
            <span className={style.Span}>food place</span>
        </Link>
    );
};

export default Logo;
