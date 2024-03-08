'use client'
import Header from "./Components/Header";
import React, { useEffect } from 'react';
import Main from "./Components/Main";
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUser } from './Redux/counterSlice';
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function Home() {
 
  return (
    <Provider store={store}>
    <div>
     
   
     <Header />
     

     <Main />

   
      
   

    </div>
    // </Provider>
  );
}
