import ACTIONS from "../constant/constant";

export const COUNTER_INITIAL_STATE = {
  count: 0,
};

function counterReducer(state = COUNTER_INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.COUNTER_INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case ACTIONS.COUNTER_DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
