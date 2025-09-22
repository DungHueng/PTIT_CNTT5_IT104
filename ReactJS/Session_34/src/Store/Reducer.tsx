import { combineReducers } from "redux";
import studentReducer from "../Reducer/Reducer";

export const Root = combineReducers({
  student: studentReducer,
});
