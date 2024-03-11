import React from 'react'
import Image from 'next/image';
import "../globals.css"
import { addToCart, emptyCart, remove_from_cart } from '../Redux/redux/action';
import { useDispatch } from 'react-redux'
import { productList, productSearchByCategory } from '../Redux/redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);

  return (
    <div className=''>
    {
      data.map((item) => <div className=''>
        <img src={item.photo} alt="" width={'150px'} height={'170px'} />
        <div className=''>  {item.name} </div>
        <div>Color : {item.color} </div>
        <div>Price : {item.price} </div>
        <div>Category : {item.category} </div>
        <div>Brand : {item.brand} </div>
        <div>
          <button className="" onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
          <button className="" onClick={() => dispatch(remove_from_cart(item.id))}>Remove </button>

        </div>
      </div>)
    }
  </div>
  
  )
}

export default Header