import React from 'react'
import ProductLists from '../../Component/List/ProductLists'

const ProductList = ({products}) => {
    //console.log(products,"page")
    return (
        <div>
            <ProductLists products={products}/>
        </div>
    )
}

export default ProductList