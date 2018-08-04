import * as React from 'react';
import './addNewBookButton.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen} from '@fortawesome/free-solid-svg-icons'

library.add(faBookOpen)

const AddNewBookButton =(props)=> {
    return (
      <div className="AddNewBookButton-wrapper">
          <button onClick={props.click} className="AddNewBookButton-button">
              <FontAwesomeIcon className="AddNewBookButton-icon"  icon="book-open" /> Add New Book</button>
      </div>
    );

}

export default AddNewBookButton;
