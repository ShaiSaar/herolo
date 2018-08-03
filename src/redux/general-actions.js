import ACTIONS from './action-names'

export function loadAll() {
    return {
        type: ACTIONS.INITIAL_INIT,
    }
}

export function setBooks(books) {
    return {
        type: ACTIONS.SET_BOOKS,
        payload: {
            books: MOC_DATA

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


const MOC_DATA = [
    {author: "J. K. Rowling", publishedDate: "1997-06-26", title: "The Philosopher's Stone"},
    {author: "J. K. Rowling", publishedDate: "1998-07-02", title: "The Chamber of Secrets"},
    {author: "J. K. Rowling", publishedDate: "1999-07-08", title: "The Prisoner of Azkaban "},
    {author: "J. K. Rowling", publishedDate: "2000-07-08", title: "The Goblet of Fire"},
    {author: "J. K. Rowling", publishedDate: "2003-06-21", title: "The Order of the Phoenix"},
    {author: "J. K. Rowling", publishedDate: "2005-07-16", title: "The Half-Blood Prince"},
    {author: "J. K. Rowling", publishedDate: "2007-07-21", title: "The Deathly Hallows"},
]