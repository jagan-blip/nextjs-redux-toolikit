import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import count from "./count/reducer";
import tick from "./tick/reducer";
import counter from "./CounterSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
/* const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}; */

const combinedReducer = combineReducers({
  count,
  tick,
  counter,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
      count: {
        count: state.count.count + action.payload.count.count,
      },
      counter: {
        ...state.counter,
        count: state.counter.count + action.payload.counter.count,
      },
    };
    /* if (state.count.count) nextState.count.count = state.count.count; */ // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return configureStore({
    reducer: reducer,
  });
};

export const wrapper = createWrapper(initStore);
