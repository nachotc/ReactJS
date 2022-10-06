import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    console.log('llegue a la navbar')

    return(
        <nav className='navbar_style'>
            <Link to='/'>
                {props.logo}
            </Link>
            <ul className='navbar_list_style'>
                <Link to='/'> <li>Home</li> </Link>
                <Link to='/products'> <li>Productos</li> </Link>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar