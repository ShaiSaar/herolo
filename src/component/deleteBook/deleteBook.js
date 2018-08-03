import React, { Component } from 'react';
import './deleteBook.css';
import PopUpWindow from "../PopUpWindow/popUpWindow";

class DeleteBook extends Component {
  render() {
    return (
        <PopUpWindow>
          <div className="DeleteBook-wrapper">
              <h2>Chosen Book:</h2>
              <h3>{this.props.title}</h3>
              <h4>Are you sure you want to delete this book?</h4>
              <div className="DeleteBook-button-wrapper">
                <button onClick={this.props.cancel}>Cancel</button>
                <button onClick={this.props.delete}>Delete</button>
              </div>
          </div>
        </PopUpWindow>
    );
  }
}

export default DeleteBook;
