import ACTIONS from "./action-names";
import * as METHODS from "./methods";

export default function reducer(state, action){
    switch (action.type){

        case ACTIONS.INITIAL_INIT:
            return METHODS.fetchBooks(state, action);
        case ACTIONS.SET_BOOKS:
            return METHODS.setBooks(state, action)
        case ACTIONS.BOOK_EDIT:
            return METHODS.setEditMode(state, action)
        case ACTIONS.DELETE_BOOK:
            return METHODS.deleteBookFromStore(state, action)
        case ACTIONS.ADD_BOOK:
            return METHODS.addBookToStore(state, action)
        case ACTIONS.EDIT_CURR_BOOK:
            return METHODS.editBookInStore(state, action)
        default:
            return state


    }

}
