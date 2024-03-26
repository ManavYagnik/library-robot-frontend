'use client'
import { useDispatch } from "react-redux";
import  {productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);


  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div className="product-container">

      

      <div className="product-heading">
        <span className="">Search Books</span>
      </div>

    
      <div className="product-table">
   
        {
          data.map((item) => <div key={item.id} className="product-item">
           

            < div className="item-widht">Book Name: {item.bookname}</ div >
            < div className="item-widht">Book Color : {item.bookid}</ div >
            < div className="item-widht">Book Status : {item.status}</ div >
            {/* < div className="item-widht">category : {item.category}</ div>
            < div className="item-widht">brand : {item.brand}</div> */}
          
             
          </div>)
        }
  

      </div>
    <div></div>


    </div>
  );
}

export default Main;