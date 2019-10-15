import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// STORE

// ACTION
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

const store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment()); // 1
store.dispatch(increment()); // 2
store.dispatch(decrement()); // 3

ReactDOM.render(<App />, document.getElementById('root'));
