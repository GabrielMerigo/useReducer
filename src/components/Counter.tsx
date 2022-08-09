import { useReducer } from "react";
import { ActionsCounter } from "../reducers/counter/Actions";
import { counterReducer, initialState } from '../reducers/counter/reducer'


export function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h3>Counter com useReducer</h3>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({ type: ActionsCounter.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ActionsCounter.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ActionsCounter.HALF })}>\</button>
      <button onClick={() => dispatch({ type: ActionsCounter.MULTIPLY })}>*</button>
      <button onClick={() => dispatch({ type: ActionsCounter.RESET })}>reset</button>
    </div>
  )
}