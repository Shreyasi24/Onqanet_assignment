import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Pages/ProductsList/ProductList"
import ProductDetails from './Pages/ProductDetails/ProductDetail';
import axios from 'axios';


function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get("https://lilyvaly.com/Backend/app/all-product?category=ALL&page=0&price")
      .then((res) => setProduct(res.data.data)
      )
  }, [])
  //console.log(product, "main")
  return (
    <div className="App">
      {
        product.length > 0 ?
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ProductList products={product} />} />
              <Route path="/:id" element={<ProductDetails allData={product} />} />
            </Routes>
          </BrowserRouter>
          :
          <div className='loader_part'>
            <span className="loader"></span>
          </div>


      }


    </div>
  );
}

export default App;
