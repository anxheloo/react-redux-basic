//STEPS FOR REDUX - THIS IS THE BASICS WITHOUT REDUX TOOLKIT

//1. First we install : npm install redux react-redux
//2.We create a "store" folder inside src and an "index.js" file on it to build our redux store
//3.We import {createStore} from "redux"
//4.We create the reducer function also giving it an initial state: const reducerFunction = (state = { counter: 0 }, action) => {};
//5.We create the store: const store = createStore(reducerFunction);
//6.We export the default store
//7.We import the Provider from 'react-redux' and our created store:import { Provider } from "react-redux";
//and wrap our whole appalso giving it the store as a value in the Provider
//9.On app.js where we want to access the counter property
//we import useSelector to access it: import { useSelector } from "react-redux";
//10.We create 2 buttons to increment and decrement our counter value, but we need the dispatch to dispatch some actions:
// so we import useDispatch:import {useSelector,useDispatch } from "react-redux"; and use it in our app: const dispatch = useDispatch()
//11. In the increment function we use the dispatch to dispatch an action giving it an action that holds an object with a type:
//  const increment = () => {dispatch({ type: "INC" });};
//12.Than we go to our store and check the actions:
//13. We also add another button to add by 10, and we give the type and also the payload-> the amount we want to add,
// than on our store we create the case where we return{counter: state.counter + action.payload}

/*
BASICS WITHOUT REDUX TOOLKIT.

import { createStore } from "redux";

const reducerFunction = (state = { counter: 0 }, action) => {
  //-LIMITATIONS:
  //Synchronous Funciton
  //We should not mutate the original state

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }

  return state;
};

const store = createStore(reducerFunction);

export default store;
*/

//NOW WE REMOVE EVERYTHING AND USE REDUX TOOLKIT INSTEAD, WE NOW BUILD EVERYTHING FROM SCRATCH
//1.WE install it : npm install @reduxjs@toolkit
//2.We import configureStore and createSlice : import { configureStore,createSlice } from "@reduxjs/toolkit";
//3.We create the counterSlice using createSlice that accepts an object : {name: , initialState: , reducers: {}}
//4.In the reducers object we define the functions
//5.After defining the reducers we configure the store, define and export the actions & export default "store"
//6.On App.js we import actions: import { actions } from "./store"; & we keep useSelector and useDispatch the same as before: import { useSelector, useDispatch } from "react-redux";
//7.We use useSelector to get the counter value : const counter = useSelector((state) => state.counter) & we create the dispatch to dispatch our actions:const dispatch = useDispatch();
//8.Than we create the "increment", "decrement", "addBy" functions and use dispatch(actions."name of function created on createSlice"),
//  for example:   const increment = () => {dispatch(actions.increment());};

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },

    decrement(state, action) {
      state.counter--;
    },

    addBy(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
