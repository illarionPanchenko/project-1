import React from 'react'
import {inc} from '../actions'
import {dec} from '../actions'
import {useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const counter = useSelector(state=>state.counter);
    const dispatch = useDispatch();

  return(
      <div>
          <h1>Counter</h1>
          <h2>{counter}</h2>
          <button onClick={() => dispatch(inc(5))}>+</button>
          <button onClick={() => dispatch(dec())}>-</button>
      </div>
  )
};
export default Counter;