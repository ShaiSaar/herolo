import React, {Component} from 'react';
import './book_list.css';
import Book from "../../component/book/book";
import {connect} from "react-redux";
import * as action from "../../redux/general-actions";
import BookEditMode from "../../component/BookEditMode/bookEditMode";
import BookHeaders from "../../component/BookHeaders/bookHeaders";
import AddNewBookButton from "../../component/AddNewBookButton/addNewBookButton";
import Loading from "../../component/Loading/loading";
import DeleteBook from "../../component/DeleteBook/deleteBook";


class BookList extends Component{

    componentDidMount() {
        this.props.fetchBooks()
            }

    showEditModeHandler = () => (<BookEditMode book={this.props.editBookMode}
                                               close={this.props.setEditMode.bind(null, null)}
                                               save={this.props.editBook} add={this.props.addBook}
                                               books={this.props.books}/>)

    showDeleteModeHandler = () => (<DeleteBook book={this.props.deleteBookMode}
                                               delete={this.props.deleteBook.bind(null, this.props.deleteBookMode)}
                                               cancel={this.props.setDeleteMode.bind(null, null)}/>)

    showBooksHandler = () => (this.props.books.map((entry, key) => <Book book={entry} key={key}
                                                                         editBookMode={this.props.setEditMode}
                                                                         deleteBookMode={this.props.setDeleteMode}/>))

    bookWrapperHandler = () => (<ul className="BookList-ul-list">{this.showBooksHandler()}</ul>)

    render() {
        return (
            <div className="BookList-wrapper">
                <h2>Book List</h2>
                <BookHeaders/>
                {(!this.props.books.length) ? <Loading/> : this.bookWrapperHandler()}
                <AddNewBookButton click={this.props.setEditMode.bind(null, {})}/>
                {(this.props.editBookMode) ? this.showEditModeHandler() : null}
                {(this.props.deleteBookMode) ? this.showDeleteModeHandler() : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        editBookMode: state.editBookMode,
        deleteBookMode: state.deleteBookMode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBooks: () => dispatch(action.setBooks()),
        fetchBooks: () => dispatch(action.fetchBooks()),
        setEditMode: (book) => dispatch(action.setEditMode(book)),
        setDeleteMode: (book) => dispatch(action.setDeleteMode(book)),
        deleteBook: (book) => dispatch(action.deleteBook(book)),
        addBook: (book) => dispatch(action.addBook(book)),
        editBook: (book) => dispatch(action.editBook(book)),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
