import { useState, useEffect } from 'react'
import { getProductById } from '../../AsyncMock'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
   
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            console.log(productId)
            setProduct(response)
            console.log(product.name)
        })
    }, [productId])

    return (
        <div>
            <h1>{product?.name}</h1>
            <img src={product?.img} className='productImg'></img>
            <div>{product?.description}</div>
        </div>
    )
}

export default ItemDetailContainer