import { LOADED,LOADING } from "./constant";

const intialstate={
    
    loading:false,
    error:""
}


export const isloading=(state=intialstate,action)=>{
    switch(action.type){
        case LOADED:
            return{
                ...state,
                loading:false,
                error:""
            }


        case LOADING:
            return{
                ...state,
                loading:true,
                error:""
            }
        
        
        default:
            return{
                ...state,
                loading:false,
                error:""

            }
        }
    
}