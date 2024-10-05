import { createStore } from "redux";

const initialValue = {
  balance: 0,
  theme: "white",
  language: "ENGLISH",
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        balance: state.balance + 1,
      };

    case "decrement":
      return {
        ...state,
        balance: state.balance - 1,
      };

    case "changeToBlack":
      return {
        ...state,
        theme: "black",
      };

    case "changeToWhite":
      return {
        ...state,
        theme: "white",
      };
    case "changeLanguage":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const store = createStore(reducer);
