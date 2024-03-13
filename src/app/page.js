'use client'
import Header from "./Components/Header";
import Main from './Components/Main'
import { Provider } from "react-redux";
import store from "./redux/store";
export default function Home() {
  return (
    <main>
    <Provider store={store}>
     {/* <Header /> */}
     <Main />
     </Provider>
      
      
    </main>
  );
}