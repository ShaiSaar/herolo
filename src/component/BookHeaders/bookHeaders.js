import * as React  from 'react';
import './bookHeaders.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faEdit, faBook )


const BookHeaders = ()=> {
    return (
      <li className="BookHeaders-wrapper">
          <span><FontAwesomeIcon className="BookHeaders-icon"  icon="book" /> ID</span>
          <span><FontAwesomeIcon className="BookHeaders-icon"  icon="book" /> AUTHOR</span>
          <span><FontAwesomeIcon className="BookHeaders-icon"  icon="book" /> PUBLISHED</span>
          <span><FontAwesomeIcon className="BookHeaders-icon"  icon="book" /> TITLE</span>
          <FontAwesomeIcon className="Book-icon"  icon="edit" />
          <FontAwesomeIcon className="Book-icon"  icon="trash" />
      </li>
    );
}

export default BookHeaders;
