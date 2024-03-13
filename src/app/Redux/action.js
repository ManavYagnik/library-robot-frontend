import {ADD_TO_CART} from './constant'
import { REMOVE_FROM_CART } from './constant';
import { EMPTY_CART } from './constant';

export const addToCart = (data) =>{

    return {
        type: ADD_TO_CART,
        data
    }
    
}

export const remove_from_cart =(data) =>
{

    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart =(data) =>
{
    
    return{
        type: EMPTY_CART,
        data
    }
}

