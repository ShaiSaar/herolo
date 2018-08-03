import React, { Component } from 'react';
import './BookViewMode.css';


class BookViewMode extends Component {

    showEditHandler = ()=>{

    }
  render() {
      const {id,author,publishedDate,title} = this.props.title

      return (
      <div className="BookViewMode-wrapper">
          <span>{id}</span>
          <span>{author}</span>
          <span>{publishedDate}</span>
          <span>{title}</span>
          <button onClick={this.props.switchMode.bind(null,this.props.title)}>Edit</button>
      </div>
    );
  }
}

export default BookViewMode;
