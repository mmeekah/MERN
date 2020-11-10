//Provider, connect - react-redux

import React from "react";
import Counter from "./Counter";
import {createStore} from 'redux'
import {DECREASE, INCREASE, RESET} from './actions'
import reducer from './reducers'

import {Provider} from 'react-redux'


//SETUP INITIAL STATE
const defaultState={
  count: 76,
  name:'mika'
}




//SETUP STORE
const store = createStore(reducer, defaultState);
store.dispatch({type: RESET})
store.dispatch({type: DECREASE})
store.dispatch({type: INCREASE})
store.dispatch({type: INCREASE})

console.log(store.getState())
const App = () => {
  return <Counter  state={store.getState()}/>;
};

export default App;
