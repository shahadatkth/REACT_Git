import { combineReducers } from "redux";
import RepositoryReducer from "./repositoryReducer";

const rootReducer = combineReducers({
  repository: RepositoryReducer
});

export default rootReducer;
