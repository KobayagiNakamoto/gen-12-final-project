import { Link } from 'react-router-dom';
import "../../../assets/styles/nav.css"

const Nav = () => {
    return(
        <div className='navmenu-wrapper'>
            <div className='navmenu'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/create'>Create recipe</Link>
            </div>

        </div>
    )
}

export default Nav;