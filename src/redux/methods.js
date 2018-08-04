import * as _ from "lodash";

export function setBooks(state, action){
    let arr = action.payload.books
    let id = state.bookId

    for(let entry of arr){
        entry.id = id
        id++
    }

    return {
        ...state,
        books: arr,
        bookId:id
    };
}

export function setEditMode(state, action){
    return {
        ...state,
        editBookMode: action.payload.book
    };
}

export function setDeleteMode(state, action){
    return {
        ...state,
        deleteBookMode: action.payload.book
    };
}

export function addBookToStore(state, action){
    let arr = _.concat(state.books,[])
    let book = action.payload.book
    let id = state.bookId
    book.id = id
    arr.push(book)
    return {
        ...state,
        books: arr,
        bookId: ++id,
        editBookMode: null
    };
}

export function editBookInStore(state, action){
    let arr = _.concat(state.books,[])
    let book = action.payload.book
    const index = arr.findIndex(o => o.id ===book.id);

    if(index===-1){return {...state}}
    arr[index] = {...book}
    return {
        ...state,
        books: arr,
        editBookMode: null
    };
}


export function deleteBookFromStore(state, action) {
    let index = state.books.findIndex(o => o.id ===action.payload.book.id);
    if(index===-1){return state}
    let arr = _.concat(state.books,[])
    arr.splice(index,1)
    return {
        ...state,
        books: arr,
        deleteBookMode: null
    };
}

