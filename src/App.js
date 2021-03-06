import { useState, useEffect, useReducer, createContext } from "react";
import Basket from "./Basket";
import Books from "./Books";
import books from "./mocks/books.js";

import Navigation from "./Navigation";

const initialState = {
  basket: {
    items: [],
    totalPrice: 0,
    quantity: 0,
    opened: false,
  },
  filters: {
    word: "",
    category: "All",
  },
  books: {
    categories: ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"],
    filteredBooks: books,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ToggleBasket":
      return {
        ...state,
        basket: {
          ...state.basket,
          opened: !state.basket.opened,
        },
      };

      break;
    case "FilterBook":
      // console.log(state)
      //  console.log("payload",action.payload)
      // console.log("categoria",state.books.categories)
      // console.log("libri",state.books.filteredBooks)
      // (action.payload="All")?books:

      return {
        ...state,
        books: {
          ...state.books,
          filteredBooks:
            action.payload === "All"
              ? books
              : books.filter((books) => books.category === action.payload),
        },
        filters: { ...state.filters, category: action.payload },
      };
      break;
    case "Search":
      return {
        ...state,
        books: {
          ...state.books,
          filteredBooks: books.filter((books) =>
            books.title.toLowerCase().includes(action.payload.toLowerCase())
          ),
        },
      };
      break;

    case "Merge":
      return {
        ...state,
        books: {
          ...state.books,
          filteredBooks:
            action.payload.filter === "All"
              ? books.filter (function (books) {return books.title.toLowerCase().includes(action.payload.value.toLowerCase())})
              : books.filter(function (books) {return books.category === action.payload.filter &&  books.title.toLowerCase().includes(action.payload.value.toLowerCase())}),
        },
        filters: { ...state.filters, category: action.payload.filter },
      };
      break;
    default:
      return state;
      break;
  }
}
export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Navigation />
        <Books />
        <Basket />
      </AppContext.Provider>
    </div>
  );
}

export default App;
