import {  BOOK_LIST, SEARCH_BOOK, SET_BOOK_LIST,SEARCH_BOOK_BY_CATEGORY,LOADING,LOADED } from '../constant';


function* getBooks(){
    yield put({type:LOADING}) 
    let data = yield fetch(`https://my-mongo-db-api.onrender.com/api/products`);

    
    data = yield data.json();
    // data = data.record.product;
    console.log("Data from bin",data);

    
    yield put({type:SET_BOOK_LIST,data:data})
    yield put({type:LOADED})
}

function* searchBooks(data){
    yield put({type:LOADING}) 
    console.log('Search data',data)
    let result = yield fetch(`https://my-mongo-db-api.onrender.com/api/products/search/${data.query}`);
    result = yield result.json();
    console.log("action is called", data)
    yield put({type: SET_BOOK_LIST, data:result})
    yield put({type:LOADED})

}

function* searchBookByCategory (data){
    yield put({type:LOADING}) 
    
    let result = yield fetch(`https://my-mongo-db-api.onrender.com/api/products/${data.query}`);
    result = yield result.json();
    console.log("action is called", data)
    yield put({type: SET_BOOK_LIST, data:result})
    yield put({type:LOADED})

}





function* BOOKSaga()
{
 yield takeEvery(BOOK_LIST, getBooks)
 yield takeEvery(SEARCH_BOOK, searchBooks)
 yield takeEvery(SEARCH_BOOK_BY_CATEGORY, searchBookByCategory)


}


export default BOOKSaga;