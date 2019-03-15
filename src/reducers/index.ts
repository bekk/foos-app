import { combineReducers } from "redux";
import { foosReducer } from "./foosReducer";

const rootReducer = combineReducers({
  foos: foosReducer
});

export default rootReducer;
