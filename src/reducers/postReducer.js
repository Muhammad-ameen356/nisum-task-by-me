import ACTIONS from "src/constant/constant";

export const POST_INITIAL_STATE = {
  posts: [],
  postLoading: true,
};

function postReducer(state = POST_INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case ACTIONS.GET_POST_FAIL:
      return {
        ...state,
      };
    case ACTIONS.GET_POST_FINISH:
      return {
        ...state,
        postLoading: false,
      };
    default:
      return state;
  }
}

export default postReducer;
