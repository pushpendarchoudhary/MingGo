import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { trackReducer } from "../reducers/trackReducer";
// import { profileReducer, userReducer,forgotPasswordReducer, allUsersReducer, userDetailsReducer } from "../reducers/userreducer";

const reducer = combineReducers({
    // user: userReducer,
    // profile: profileReducer,
    // allUsers: allUsersReducer,

    tracks: trackReducer,

});

let initialState = {};

const middleware = [thunk];
const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;