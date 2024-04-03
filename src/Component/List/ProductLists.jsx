import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';

const ProductList = ({ products }) => {
    //console.log(products,"products")
    return (
        <>
            <div className="product">
                <div className="container">
                    <div className="product_details" >
                        {
                            products && products.map((ele, i) => {
                                return (
                                    <Link to={`/${ele.name}`} className="product_info" key={i}>
                                        <div className="product_img">
                                            <img src={`https://lilyvaly.com/Backend/public/image/product/${ele.productimage}`} />
                                            <div className="add-cart">
                                                <h3>Add to Cart</h3>
                                            </div>
                                        </div>
                                        <div className="product_text">
                                            <div className="text_dtls">
                                                <h4>{ele.name}</h4>
                                                <div className="txt_info">
                                                    <h5><span>$</span>{ele.sellprice}</h5>
                                                    <ul className='star'>
                                                        <li><a href="javascript:void(0)"><FaStar /></a></li>
                                                        <li><a href="javascript:void(0)"><FaStar /></a></li>
                                                        <li><a href="javascript:void(0)"><FaStar /></a></li>
                                                        <li><a href="javascript:void(0)"><FaStar /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wishlist">
                                                <CiHeart />
                                            </div>
                                        </div>
                                    </Link>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList