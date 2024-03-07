import { makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const store = storeRef.current;
    if (store) {
      const unsubscribe = setupListeners(store.dispatch);
      return () => {
        unsubscribe();
      };
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
