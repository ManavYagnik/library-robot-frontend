import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";

import { isloading } from "./LoadingReducer";

export default combineReducers({
    cartData,
    productData,
    isloading
    // contactData
})

