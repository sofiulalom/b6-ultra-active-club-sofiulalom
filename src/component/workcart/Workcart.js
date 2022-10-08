import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Workcart.css';


const Workcart = () => {
    const [products,setProducts] =useState([]);

   useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   },[]);
   return (
    <div className='heder-information'>
     <h2>Select Actiive Work</h2>
    <div className='cart-container'>
      <div className='cart-info'>
     
      {
        products.map(product => <Cart 
            key={product.id}
            product={product}
            

            ></Cart>)
        }
       </div>
       </div>
       </div>

    );
};

export default Workcart;
