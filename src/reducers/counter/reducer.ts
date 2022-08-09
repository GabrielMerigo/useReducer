import { ActionsCounter } from "./Actions";

export const initialState = {
  count: 0
};

export type State = {
  count: number
}

export function counterReducer(state: State, action: any) {
  switch (action.type) {
    case ActionsCounter.DECREMENT:
      return {
        count: state.count - 1
      }
    case ActionsCounter.INCREMENT:
      return {
        count: state.count + 1
      }
    case ActionsCounter.MULTIPLY:
      return {
        count: state.count * 2
      }
    case ActionsCounter.HALF:
      return {
        count: state.count / 2
      }
    case ActionsCounter.RESET:
      return {
        count: initialState.count
      }
    default:
      return state;
  }
}