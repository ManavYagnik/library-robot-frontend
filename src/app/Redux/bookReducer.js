import { BOOK_LIST } from "./constant";

export const bookData = (data =[], action) =>{
    switch(action.type){
        case BOOK_LIST:
            console.log("Book_List condition ", action)
            return [...action.data]
        default:
            return data;
    }
}