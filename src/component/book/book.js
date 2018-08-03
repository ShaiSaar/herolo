import React, {PureComponent } from 'react';
import './book.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faBook, faHashtag } from '@fortawesome/free-solid-svg-icons'
import DeleteBook from "../deleteBook/deleteBook";
import MobileHeaders from "../MobileHeaders/mobileHeaders";

library.add(faTrash, faEdit, faBook, faHashtag )


class Book extends PureComponent {
    state={
        popUpDelete: false
    }

    togglePopUpDelete = ()=>{
        this.setState((prevState)=>({popUpDelete: !prevState.popUpDelete}))
    }

    deleteBookHandler =()=>{
        this.props.deleteBook(this.props.title)
        this.togglePopUpDelete()
    }



  render() {
      const {id,author,publishedDate,title} = this.props.title
    return (
      <li className="Book-wrapper">
          <p><MobileHeaders type={"hashtag"}/><FontAwesomeIcon className="Book-desktop-icon" icon="hashtag" />{` ${id}`}</p>
          <p><MobileHeaders type={"user"}/>{` ${author}`}</p>
          <p><MobileHeaders type={"clock"}/>{` ${publishedDate}`}</p>
          <p><MobileHeaders type={"book"}/>{` ${title}`}</p>
          <span className="Book-icon-mobile-wrapper">
          <FontAwesomeIcon className="Book-icon" onClick={this.props.switchMode.bind(null,this.props.title)} icon="edit" />
          <FontAwesomeIcon className="Book-icon" onClick={this.togglePopUpDelete} icon="trash" />
          </span>
          {this.state.popUpDelete && <DeleteBook title={title} delete={this.deleteBookHandler} cancel={this.togglePopUpDelete}/>}
      </li>
    );
  }
}

export default Book;
