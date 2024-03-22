'use client'

import Main from './Components/Main'
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from './Components/Header';
export default function Home() {
  return (
    <main>
    <Provider store={store}>
     <Header />
     <Main />
     </Provider>
      
      
    </main>
  );
}
