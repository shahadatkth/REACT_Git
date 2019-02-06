import { FETCH_REPOSITORY_SUCCESS } from "../actions/action_types";

const repositoryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_REPOSITORY_SUCCESS:
      return [action.payload.data, ...state];

    default:
      break;
  }
  return state;
};

export default repositoryReducer;
