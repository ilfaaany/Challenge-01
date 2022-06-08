import { combineReducers } from "redux";
import { itemReducer, selectedItemReducer, buttonReducer,  searchItemReducer } from "./itemReducers";

const rootReducer = combineReducers({
  cars: itemReducer,
  selectedItem: selectedItemReducer,
  buttonText: buttonReducer,
  searchItem: searchItemReducer,
});

export default rootReducer;