import { PRODUCT_LIST, SEARCH_PRODUCT, SEARCH_PRODUCT_BY_CATEGORY } from "./constant"

export const productList = () =>
{     
       return {
        type: PRODUCT_LIST,

    }
}

// export const setProductList = (data) =>{
//     console.log("set action");
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }


export const productSearchByCategory = (query) => {
    return {
        type: SEARCH_PRODUCT_BY_CATEGORY,
        query,
    }
}

export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT,
        query,
    }
}