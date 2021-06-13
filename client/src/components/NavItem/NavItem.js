import { Link } from "react-router-dom";

const NavItem = ({ where, text }) => (
    <div className="nav-item">
        <li>
            <Link to={where}>{text}</Link>
        </li>
        <span className="li-span">&nbsp;</span>
    </div>
);

export default NavItem;
