import React, {PureComponent } from 'react';
import './book.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faBook, faHashtag } from '@fortawesome/free-solid-svg-icons'
import MobileHeaders from "../MobileHeaders/mobileHeaders";
import {isDateIsValid, titleValidation} from "../../GeneralMethods";

library.add(faTrash, faEdit, faBook, faHashtag )


class Book extends PureComponent {

    state={
        id:null,
        author:null,
        publishedDate:null,
        title:null
        }

    componentDidMount(){
        this.bookDetailsHandler()
    }
    componentDidUpdate(){
        this.bookDetailsHandler()
    }

    bookDetailsHandler =()=>{
        let {author,publishedDate,title,id} = this.props.book
        title = titleValidation(title)
        publishedDate = (isDateIsValid(publishedDate))? publishedDate : "Date Not Valid"
        this.setState({id, author, publishedDate, title})
    }


  render() {

    return (
      <li className="Book-wrapper">
          <p><MobileHeaders type={"hashtag"}/><FontAwesomeIcon className="Book-desktop-icon" icon="hashtag" />{` ${this.state.id}`}</p>
          <p><MobileHeaders type={"user"}/>{` ${this.state.author}`}</p>
          <p><MobileHeaders type={"clock"}/>{` ${this.state.publishedDate}`}</p>
          <p><MobileHeaders type={"book"}/>{` ${this.state.title}`}</p>
          <span className="Book-icon-mobile-wrapper">
          <FontAwesomeIcon className="Book-icon" onClick={this.props.editBookMode.bind(null,this.state)} icon="edit" />
          <FontAwesomeIcon className="Book-icon" onClick={this.props.deleteBookMode.bind(null,this.state)} icon="trash" />
          </span>
      </li>
    );
  }
}

export default Book;
