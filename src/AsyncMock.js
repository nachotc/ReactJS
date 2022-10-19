const productos = [
    {id:'1',
    name: 'Santos Minas Gerais',
    price: 1100,
    origin: 'Brasil',
    tipo: 'Cafe',
    img: 'https://marvel-b1-cdn.bc0a.com/f00000000263857/www.whittard.com/on/demandware.static/-/Sites-whittard-master-catalog/default/dwb5fe1eef/images/hi-res/111039-SANTOS_JAVA_125G-1.jpg',
    stock: 50,
    description: 'Café intenso con notas a chocolate, caramelo y almendras de la región de Minas Gerais'},
    {id:'2',
    name: 'Santo Colombia',
    price: 1530,
    origin: 'Colombia',
    tipo: 'Cafe',
    img: 'https://marvel-b1-cdn.bc0a.com/f00000000263857/www.whittard.com/on/demandware.static/-/Sites-whittard-master-catalog/default/dwb5fe1eef/images/hi-res/111039-SANTOS_JAVA_125G-1.jpg',
    stock: 13,
    description: 'Café artesanal con notas frutales y cacao con un dejo de caña de azucar por su proceso de torrado'},
    {id:'3',
    name: 'Blend de la Casa',
    price: 1000,
    origin: 'Brasil y Colombia',
    tipo: 'Cafe',
    img: 'https://marvel-b1-cdn.bc0a.com/f00000000263857/www.whittard.com/on/demandware.static/-/Sites-whittard-master-catalog/default/dwb5fe1eef/images/hi-res/111039-SANTOS_JAVA_125G-1.jpg',
    stock: 75,
    description: 'Blend de granos Colombianos y Brasileros en igual proporción ideal para el dia a dia'},
    {id:'5',
    name: 'Taza Nescafé',
    price: 650,
    origin: 'Argentina',
    tipo: 'Tazas',
    img: 'https://http2.mlstatic.com/D_NQ_NP_614315-MLA47116870303_082021-O.jpg',
    stock: 15,
    description: 'Taza emblemática de la empresa Nescafé, para disfrutar nuestros productos'}

]

export const getProducts = () => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            response(productos)
        },2000)
    }

    )
}

export const getProductById = (productId) => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            response(productos.find(product => product.id == productId))
        },1000)
    }

    )
}

export const getProductByCategory = (category) => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            response(productos.filter(product => product.tipo === category))
        },1000)
    }

    )

}

/* para filtrado por origen - ver despues
export const getProductsByOrigin = (origen) => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            response(productos.filter(item => item.origin.toLowerCase().includes(origen.toLowerCase()) ))
        },2000)
    }

    )
}
*/