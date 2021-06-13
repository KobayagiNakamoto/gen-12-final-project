import { Link } from "react-router-dom";
import style from "./Button.module.css";
const Button = ({ btn, text, where }) => {
    return (
        <>
            <Link
                to={where}
                className={btn === "White" ? style.White : style.Green}
            >
                {text}
            </Link>
        </>
    );
};

export default Button;
