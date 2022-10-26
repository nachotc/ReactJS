import cart_icon from '../../assets/shop_cart_icon.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {
    
     const { total } = useContext(CartContext)

    return (
             <Link to='/'>
                 <img src={cart_icon}  alt="shop_icon" />
                    {total} 
             </Link>
            )
}

export default CartWidget