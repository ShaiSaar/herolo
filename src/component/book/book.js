import * as React from 'react';
import './book.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrash, faBook, faHashtag} from '@fortawesome/free-solid-svg-icons'
import MobileHeaders from "../MobileHeaders/mobileHeaders";
import {isDateIsValid, titleValidation} from "../../GeneralMethods";

library.add(faTrash, faEdit, faBook, faHashtag)


const Book =(props)=> {

    let {author, publishedDate, title, id} = props.book
    title = titleValidation(title)
    publishedDate = (isDateIsValid(publishedDate)) ? publishedDate : "Date Not Valid"
    return (
        <li className="Book-wrapper">
            <p><MobileHeaders type={"hashtag"}/><FontAwesomeIcon className="Book-desktop-icon" icon="hashtag"/>{` ${id}`}</p>
            <p><MobileHeaders type={"user"}/>{` ${author}`}</p>
            <p><MobileHeaders type={"clock"}/>{` ${publishedDate}`}</p>
            <p><MobileHeaders type={"book"}/>{` ${title}`}</p>
            <span className="Book-icon-mobile-wrapper">
                  <FontAwesomeIcon className="Book-icon" onClick={props.editBookMode.bind(null, props.book)} icon="edit"/>
                  <FontAwesomeIcon className="Book-icon" onClick={props.deleteBookMode.bind(null, props.book)} icon="trash"/>
            </span>
        </li>)
}

export default Book;
