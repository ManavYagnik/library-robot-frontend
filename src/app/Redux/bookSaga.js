import {takeEvery, put} from 'redux-saga/effects'
import { BOOK_LIST } from './constant'

function* getBooks(){
    let data = yield fetch(`https://my-mongo-db-api.onrender.com/api/products`);
        
    data = yield data.json();
    // data = data.record.product;
    console.log("Data from bin",data);

    
    yield put({type:SET_PRODUCT_LIST,data:data})
}


function* bookSaga()
{
 yield takeEvery(BOOK_LIST, getBooks)



}


export default bookSaga;