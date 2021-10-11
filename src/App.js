import { useState, useEffect,useReducer,createContext } from "react";
import Basket from "./Basket";
import Books from "./Books";

import Navigation from "./Navigation";


const initialState={opened:false}

function reducer(state,action){
  switch(action.type) {
  case "ToggleBasket":
  return {opened:!state.opened};

  break;
  default: 
  return state
  break;

  }
}
export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='App'>
      <AppContext.Provider value={{state,dispatch}}>
      <Navigation/>
      <Books/>
      <Basket />
      </AppContext.Provider>
    </div>
  );
}

export default App;
