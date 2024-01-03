import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {action} from "./store/index"

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
   
  const Increment=()=>{
  dispatch(action.increment())
  };

  const decrement =()=>{
    dispatch(action.decrement())
  }

  const byTen =()=>{
    dispatch(action.byten(10))  
  }

  const toZero =()=>{
    dispatch(action.toZero(0))
  }

  const multiplybyTwo =()=>{
    dispatch(action.byTwo(2))
  }



  return (
    <main>
      <h1>Counter app</h1>
      <h2>{counter}</h2>

      <button onClick={Increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={byTen}>Increase by 10</button>
      <button onClick={toZero}>To Zero</button>
      <button onClick={multiplybyTwo}>by two</button>
    </main>
  )
}

export default App
