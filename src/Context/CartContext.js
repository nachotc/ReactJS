import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addProduct = (productToAdd) => {

        cart.forEach(prod => {
            if (prod.id == productToAdd.id){
                prod.quantity += productToAdd.quantity
                setCart([...cart])
            }
        })

      }
    
    const removeProduct = (id) => {
        const cart2 = cart.filter(prod => prod.id !== id)
        setCart(cart2)
      }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity
        })

        return total
    }

    useEffect(() => {
         const totalProducts = getTotal()
         setTotal(totalProducts)
    }, [cart])

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, total}}>
            {children}
        </CartContext.Provider>
    )
}