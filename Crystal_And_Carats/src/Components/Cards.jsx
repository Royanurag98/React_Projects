import React, { useState } from 'react';
import './HomPges.css'



function Cards({ product }) {

  const [cart,setCart]=useState([])
  const handleClick = (product) => {
    console.log(product);
  
   cart.push(product)
    console.log(cart);
  }
  const cardData=()=>{
    console.log(product.thumbnail,product.title,product.price,product.discountPercentage)
  }
  
  return (
    <div>
      <div className="cards" onClick={cardData} >
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <div className='card-content001' >
    
      <h3 >Price:{product.price}</h3>
      <p>Discount :{product.discountPercentage}%</p>
      </div>
    </div>
    </div>
  );
}

export default Cards;
// const [Count, setCount]=useState(0);
  
// const updateCount = (prev) => {
//   setCount(prev => prev + 1);
//   console.log(Count); // This will log the value of prev passed to the updateCount function
// };