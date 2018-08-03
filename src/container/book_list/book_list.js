import React, {Component} from 'react';
import './book_list.css';
import Book from "../../component/book/book";
import {connect} from "react-redux";
import {setBooks, setEditMode, deleteBook, addBook, editBook, loadAll} from "../../redux/general-actions";
import BookEditMode from "../../component/BookEditMode/bookEditMode";
import BookHeaders from "../../component/BookHeaders/bookHeaders";
import AddNewBookButton from "../../component/AddNewBookButton/addNewBookButton";
import Loading from "../../component/loading/loading";


class BookList extends Component {
    state = {
        loading: false,
        headers: ["Book ID", "Author", "Published Date", "Title"]
    }

    componentDidMount() {
        // axios.get('moc_data.json').then((response)=> {
        //     console.log(response.data);
        // })
        //     .catch((error)=> {
        //         console.log(error);
        //     });
        // this.setState({books:this.props.books})
        setTimeout(() => this.props.setBooks(), 2000)

    }

    setBookEditHandler = (book) => {
        this.props.setEditMode(book)
    }

    deleteBookHandler = (book) => {
        this.props.deleteBook(book)
    }

    showEditModeHandler = () => (<BookEditMode title={this.props.editBookMode}
                                               close={this.setBookEditHandler.bind(null, null)}
                                               save={this.props.editBook} add={this.props.addBook}
                                               books={this.props.books}/>)

    showBooksHandler = () => (this.props.books.map((entry, key) => <Book title={entry} key={key}
                                                                         switchMode={this.setBookEditHandler}
                                                                         deleteBook={this.deleteBookHandler}/>))

    bookWrapperHandler = () => (<ul className="BookList-ul-list">{this.showBooksHandler()}</ul>)

    render() {
        return (
            <div className="BookList-wrapper">
                <h2>Book List</h2>
                <BookHeaders/>
                {(this.props.books.length === 0) ? <Loading/> : this.bookWrapperHandler()}
                <AddNewBookButton click={this.setBookEditHandler.bind(null, {})}/>
                {(this.props.editBookMode) ? this.showEditModeHandler() : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        editBookMode: state.editBookMode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBooks: () => dispatch(setBooks()),
        loadAll: () => dispatch(loadAll()),
        setEditMode: (book) => dispatch(setEditMode(book)),
        deleteBook: (book) => dispatch(deleteBook(book)),
        addBook: (book) => dispatch(addBook(book)),
        editBook: (book) => dispatch(editBook(book)),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
