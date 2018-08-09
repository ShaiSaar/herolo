import ACTIONS from './action-names'
import axios from 'axios'


export const fetchBooks = () => (dispatch, getState) => {
    axios.get('moc_data.json')
        .then(res => {dispatch(setBooks(res.data))})
}


export function setBooks(books) {
    return {
        type: ACTIONS.SET_BOOKS,
        payload: {
            books

        }
    }
}

export function setEditMode(book) {
    return {
        type: ACTIONS.BOOK_EDIT,
        payload: {
            book: book

        }
    }
}
export function setDeleteMode(book) {
    return {
        type: ACTIONS.DELETE_BOOK_MODE,
        payload: {
            book: book
        }
    }
}

export function addBook(book) {
    return {
        type: ACTIONS.ADD_BOOK,
        payload: {
            book: book
        }
    }
}

export function editBook(book) {

    return {
        type: ACTIONS.EDIT_CURR_BOOK,
        payload: {
            book: book
        }
    }
}

export function deleteBook(book) {
    return {
        type: ACTIONS.DELETE_BOOK,
        payload: {
            book: book
        }
    }
}


