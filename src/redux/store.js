import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import Reducer from './reducer'

const initialState = {
    bookId: 1,
    books : [],
    editBookMode: null,

}

export const store = createStore(
    Reducer,
    initialState,
    applyMiddleware(thunk));