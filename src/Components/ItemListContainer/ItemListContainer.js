import { useState, useEffect } from 'react'
import { getProducts } from '../../AsyncMock'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
//import { getProductsByCategory } from '../../asyncMock'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, []
    )

    return (
    <div>
        <div>Hola, {props.name}! Acá iran tus productos</div>
        <Item products={products}/>
    </div>
    )
}

export default ItemListContainer