'use client'
import { useDispatch } from "react-redux";
import  {productList } from "../Redux/productAction";
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

      {/* <img src="images/corousel/4.png" width={'100%'} alt=""/> */}
    
      {/* <div>
        <button id="btn3"onClick={() => dispatch(emptyCart())}>EMPTY_CART</button>
        </div>

        <div>
        <button id="btn4"onClick={() => dispatch(productList())}>Get Product List</button>
        </div> */}

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
