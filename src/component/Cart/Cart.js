import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {addMeCart}=props;
   
  const {picture,title,age,time,header,}=props.product;
  
    return (

       
       <div className='cart-inpu'>
       
       <img src={picture} alt=''></img>
       <h4>{header}</h4>
        <p> {title} </p>
        <p><small>For Age {age}</small></p>
        <p><small>Time required {time}m</small></p>

        <button onClick={()=>addMeCart(time)} className='btn-item'>Added me</button>
       </div>  
       
      
    );
};

export default Cart;
