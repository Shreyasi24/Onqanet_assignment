import React, { useEffect, useState } from 'react'
import ProductDetails from '../../Component/Detail/ProductDetails'
import { useParams } from 'react-router'

const ProductDetail = ({ allData }) => {
  const { id } = useParams()
  //console.log(id,"id")

  return (
    <div>
      <ProductDetails productDetail={allData.find((product) => product.name === id)} />
    </div>
  )
}

export default ProductDetail