import {combineReducers, createStore} from "redux";
import dialogsReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers);

export default store;