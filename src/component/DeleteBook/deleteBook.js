import * as React from 'react';
import './deleteBook.css';
import PopUpWindow from "../PopUpWindow/popUpWindow";
import {titleValidation} from "../../GeneralMethods";

const DeleteBook =(props)=> {
    let title = titleValidation(props.book.title)

        return (
            <PopUpWindow>
                <div className="DeleteBook-wrapper">
                    <h2>Chosen Book:</h2>
                    <h3>{title}</h3>
                    <h4>Are you sure you want to delete this book?</h4>
                    <div className="DeleteBook-button-wrapper">
                        <button onClick={props.cancel}>Cancel</button>
                        <button onClick={props.delete}>Delete</button>
                    </div>
                </div>
            </PopUpWindow>
        );
}

export default DeleteBook;
