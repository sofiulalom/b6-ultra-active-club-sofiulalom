import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Workcart.css';
import img from'./../../sofiulalom.jpg';

const Workcart = () => {
    const [products,setProducts] =useState([]);
    const [time, setTime]=useState(0)

   useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   },[]);

   const addMeCart=(somoy)=>{
    
     const newTime=time+parseInt(somoy);
    setTime(newTime)
   }

   return (
    <div className='heder-information'>
     <h2>Select Actiive Work</h2>
    <div className='cart-container'>
      <div className='cart-info'>
     
      {
        products.map(product => <Cart 
            key={product.id}
            product={product}
            addMeCart={addMeCart}
            time={time}

            ></Cart>)
     }
             </div>
          <div className='second-cart'>
            <div className='Cart-secondinfo'>
            <img src={img} alt="" />
            <h5>saha sofiul alom</h5>
            

            </div>
            <div className='my-info'>
            <p>i am a teacher</p>
            <small>i am in class degre first year</small>
            <h6>my age : 22</h6>
             
            </div>
            <div>
              <h5>Add Brack Time</h5>
              <div className='btn-time'>
               <button>60m</button>
               <button>50m</button>
               <button>30m</button>
               <button>60m</button>
               </div>
            </div>
            <div>
              <h5>Exercise Details</h5>
              <p className='ex-time'>Exercise time <span>{time}  miniuts</span></p>
                <p className='brck-time'>Breck time <span> miniuts</span></p>
              <button className='btn-activity'>Activity Completed</button>
            </div>
          </div>
        </div>
        </div>

       
       

    );
};

export default Workcart;
