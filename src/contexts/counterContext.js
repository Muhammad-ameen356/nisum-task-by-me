import React, { createContext, useReducer } from "react";
import ACTIONS from "src/constant/constant";
import counterReducer, {
  COUNTER_INITIAL_STATE,
} from "src/reducers/counterReducer";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    COUNTER_INITIAL_STATE
  );

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
