import {validateHandler, isDateIsValid} from "./../GeneralMethods";
import * as _ from "lodash";
// import axios from 'axios'
// import * as ACTIONS from './general-actions'

export function setBooks(state, action){
    let {arr,id} = validation(action.payload.books, state.bookId)

    return {
        ...state,
        books: arr,
        bookId:id
    };
}

export function fetchBooks(state, action){

    // const books = axios.get('moc_data.json')

    // return (dispatch)=>{
    //     dispatch(ACTIONS.setBooks())
    //     // books.then(function (response) {
    //     //     console.log(response.data);
    //     //     //dispatch(ACTIONS.setBooks(response.data))
    //     // })
    //     //     .catch(function (error) {
    //     //         console.log(error);
    //     //     });
    // }

    return {...state}

}


export function setEditMode(state, action){
    return {
        ...state,
        editBookMode: action.payload.book
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

    let index = _.indexOf(state.books,action.payload.book)
    console.log(index)

    if(index===-1){return state}
    let arr = _.concat(state.books,[])
    arr.splice(index,1)

    return {
        ...state,
        books: arr
    };
}

function validation(arr, bookID) {
    let id = bookID
    for(let entry of arr){
        entry.title = validateHandler(entry.title)
        entry.publishedDate = (isDateIsValid(entry.publishedDate))? entry.publishedDate : "Date Not Valid"
        entry.id = id
        id++
    }
    return {arr, id}
}
