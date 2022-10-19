import { useState, useEffect } from 'react'
import { getProducts } from '../../AsyncMock'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import { getProductByCategory } from '../../AsyncMock'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { category } = useParams()

    useEffect(() => {

        if(category === undefined){
            getProducts().then(response => {
                setProducts(response)
            })
        }
        else{
            getProductByCategory(category).then(response => {
                setProducts(response)
            })
        }
       
      
    }, [category]
    )

    return (
    <div>
        <Item products={products}/>
    </div>
    )
}

export default ItemListContainer