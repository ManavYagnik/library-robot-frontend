
import Header from "./Components/Header";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../reducers/counterSlice';


export default function Home() {
  const user = useSelector((state) => state.counter.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
     
   
     <Header />
     

   
      
   

      {user ? (
        <div>
          <h1>User Details:</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}
