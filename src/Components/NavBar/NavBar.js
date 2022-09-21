import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import '../CartWidget/CartWidget'

const NavBar = (props) => {
    console.log('llegue a la navbar')

    return(
        <nav className='navbar_style'>
            {props.logo}
            <ul className='navbar_list_style'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Imagenes</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar