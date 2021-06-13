import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Logo color="White" />
            <Nav />
            <div className={style.copyright}>
                <p>
                    Baby's Food Place <br /> copyright &copy; 2021
                </p>
            </div>
        </footer>
    );
};

export default Footer;
