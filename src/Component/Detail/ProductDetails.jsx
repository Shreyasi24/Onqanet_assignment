import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CiHeart } from "react-icons/ci";
import { FaBox, FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const ProductDetails = ({ productDetail }) => {
    //console.log(productDetail,"productDetail")
    return (
        <div className='product'>
            <div className="container">
                <div className="product_detailing">
                    <div className="product_details_img">
                        <div className="product_part_img">
                            <img src={`https://lilyvaly.com/Backend/public/image/product/${productDetail?.productimage
                                }`} />
                            <img src={`https://lilyvaly.com/Backend/public/image/product/${productDetail?.productimage
                                }`} />
                            <img src={`https://lilyvaly.com/Backend/public/image/product/${productDetail?.productimage
                                }`} />
                            <img src={`https://lilyvaly.com/Backend/public/image/product/${productDetail?.productimage
                                }`} />
                        </div>
                        <div className="detail_img" >
                            <img src={`https://lilyvaly.com/Backend/public/image/product/${productDetail?.productimage
                                }`} />

                        </div>
                    </div>
                    <div className="detail_text">
                        <div className="prdct_name">
                            <h3>{productDetail?.name}</h3>
                        </div>
                        <div className="prdct_rtng">
                            <h4>4.2<span className='star'><FaStar /></span></h4>
                            <div className='rvw'>
                                <h5>(188 retings <span>|</span> 56 Reviews)</h5>
                                <h6>In Stock</h6>
                            </div>
                        </div>
                        <div className="prdct_price">
                            <h4>${productDetail?.sellprice}</h4>
                        </div>
                        <div className="prdct_qnty">
                            <h4>Quantity</h4>
                            <select>
                                <option>30ml</option>
                                <option>40ml</option>
                            </select>
                        </div>
                        <div className="add_cart">
                            <div className="cart_qty">
                                <span>-</span>
                                <h5>1</h5>
                                <span>+</span>
                            </div>
                            <a href='#'>Add to Cart</a>
                            <div className="wishlist">
                                <CiHeart />
                            </div>
                        </div>
                        <div className="cart_dtls">
                            <h4><span><FaBox /></span>Free worldwide shipping on all orders over $100</h4>
                            <h4><span><CiClock2 /></span>Delivery In:3-7 working days<span>Shipping & Return</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails