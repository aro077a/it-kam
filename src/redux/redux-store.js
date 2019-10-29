import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./userReducer";

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sideBarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
