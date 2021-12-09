
import React, { useState } from "react";

export const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) { 
      case "SWITCH_MENU": 
      return {
        ...state,
        menu: !state.menu  
      };
    case "SWITCH_SEARCHBAR":
        console.log("app reducer")
      return {
        ...state,
        search: !state.search
      };
    
    default:
      return state;
  }
};
export const Provider = ({ children }) => {
  const [state, setState] = useState({
    dispatch: (action) => {
      setState((state) => reducer(state, action));
    },
    menu: false,
    search:false 
  });
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
