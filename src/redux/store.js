import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initState = {
  greeting: '',
};

const GETGREETING = 'GREETING/GET';

export function getGreeting(data) {
  return {
    type: GETGREETING,
    payload: data,
  };
}

const greetingReducer = (state = initState, action) => {
  switch (action.type) {
    case GETGREETING:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

const store = configureStore(
  {
    reducer: greetingReducer,
  },
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
