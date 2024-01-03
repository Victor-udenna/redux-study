import { createSlice, configureStore } from "@reduxjs/toolkit";


const countslice = createSlice({
name: "counter",
initialState: {counter: 0},
reducers: {
  increment: (state)=>{
    state.counter++
  },
  decrement: (state)=>{
    state.counter--
  },
  byten: (state, action)=>{
    state.counter += action.payload
  },
  toZero: (state, action)=>{
  state.counter = action.payload
  },
  byTwo: (state, action)=>{
    state.counter *= action.payload
  }
}
})



export const action = countslice.actions


const store = configureStore({reducer: countslice.reducer})

export default store


// import { createStore } from "redux";

// const reducerFn = (state ={counter: 0}, action)=>{

// if(action.type === "INC"){
//     return {counter: state.counter + 1}
// }

// if (action.type === "DEC"){
//     return {counter: state.counter - 1}
// }

// if (action.type === "Byten"){
//     return { counter: state.counter + action.payload}
// }

// if(action.type === "ZERO"){
//     return {counter: state.counter = 0}
// }


// if(action.type === "byTwo"){
//  return {counter: state.counter * 2}    
// }


//  return state
// }

// const store = createStore(reducerFn);

// export default store;

