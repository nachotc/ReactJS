import { Link } from "react-router-dom"

const Item = ({products}) => {
    return(
        <ul>
            {products.map(product => <Link to={`/product/${product.id}`} key={product.id}>{product.name}</Link>) }
        </ul>
    )
}

export default Item