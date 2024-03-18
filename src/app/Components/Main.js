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
    <div className="">
            <div className="">
        <span className="">Products</span>
      </div>

    
      <div className="">
   
        {
          data.map((item) => <div key={item.id} className="product-item">
            {/* <img src={item.photo} alt="" width={"200px"} height={"200px"} /> */}

            <div>Name: {item.name}</div>
            <div>color : {item.color}</div>
            <div>price : {item.price}</div>
            <div>category : {item.category}</div>
            <div>brand : {item.brand}</div>
          
             
          </div>)
        }
  

      </div>
    


    </div>
  );
}

export default Main;