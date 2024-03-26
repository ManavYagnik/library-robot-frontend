import {takeEvery,put} from 'redux-saga/effects'
import {  PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST,SEARCH_PRODUCT_BY_CATEGORY,LOADING,LOADED } from './constant';


function* getProducts(){
    yield put({type:LOADING}) 
    let data = yield fetch(`https://backend-library-robot.onrender.com/api/books`);

    
    data = yield data.json();
    // data = data.record.product;
  

    
    yield put({type:SET_PRODUCT_LIST,data:data})
    yield put({type:LOADED})
}

function* searchProducts(data){
    yield put({type:LOADING}) 
   
    let result = yield fetch(`https://my-mongo-db-api.onrender.com/api/products/search/${data.query}`);
    result = yield result.json();
 
    yield put({type: SET_PRODUCT_LIST, data:result})
    yield put({type:LOADED})

}

function* searchProductByCategory (data){
    yield put({type:LOADING}) 
    
    let result = yield fetch(`https://my-mongo-db-api.onrender.com/api/products/${data.query}`);
    result = yield result.json();

    yield put({type: SET_PRODUCT_LIST, data:result})
    yield put({type:LOADED})

}





function* productSaga()
{
 yield takeEvery(PRODUCT_LIST, getProducts)
 yield takeEvery(SEARCH_PRODUCT, searchProducts)
 yield takeEvery(SEARCH_PRODUCT_BY_CATEGORY, searchProductByCategory)


}


export default productSaga;