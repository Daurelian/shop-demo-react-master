import { useState, useEffect,useReducer } from "react";
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


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='App'>
      <Navigation dispatch={dispatch}/>
      <Books />
      <Basket opened={state.opened} dispatch={dispatch} />
    </div>
  );
}

export default App;
