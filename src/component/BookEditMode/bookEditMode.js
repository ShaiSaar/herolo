import React, {Component} from 'react';
import './bookEditMode.css';
import PopUpWindow from "../PopUpWindow/popUpWindow";
import {validateHandler,isDateIsValid,isBookExist} from "../../GeneralMethods";

class BookEditMode extends Component {
    constructor(props) {
        super(props)
        this.authorRef =  React.createRef();
        this.dateRef = React.createRef();
        this.titleRef = React.createRef();
        this.state = {
            errMsg: ""
        }
    }

    authorInputHandler = (e)=>{
        e.preventDefault()
        let msgErr = false
        let author = this.authorRef.current
        let publishedDate = this.dateRef.current
        let title = this.titleRef.current

        for(let entry of [author,publishedDate,title]){
            entry.classList.remove("BookEditMode-warning")}

        if(author.value.length ===0){msgErr = errField(author, true)}
        if(!isDateIsValid(publishedDate.value)){msgErr = errField(publishedDate, true)}
        if(!this.validateTitle(title.value)){msgErr =errField(title,true)}
        if(isBookExist(title.value, this.props.books,this.props.title.title)){msgErr =errField(title,false)}

        function errField(field, errType) { // errType: true-invalid entry, false- book title exist
            field.classList.add("BookEditMode-warning")
            return ((errType)?"Fields weren't filled correctly":"Book with this title already exist")
        }

        //Book was validated
        if(!msgErr){
            let obj= {author: author.value, publishedDate:publishedDate.value, title:validateHandler(title.value) }
            let newBook = {...this.props.title,...obj}

            if(this.props.title.id){this.props.save(newBook)}
            else {this.props.add(newBook)}
        } else (this.setState({errMsg:msgErr}))
    }

    validateTitle=(title)=>{
        if(title.length===0) {return false}
        let copyTitle = validateHandler(title)
        return copyTitle.length === title.length;

    }

    render() {
        const {id, author, publishedDate, title} = this.props.title
        return (
            <PopUpWindow>
            <div className="BookEditMode-wrapper">
                <h2>Book Info</h2>
                <form className="BookEditMode-form-wrapper">
                    <input defaultValue={id} disabled={true} placeholder="Will be add automatically"/>
                    <input className="" defaultValue={author} ref={this.authorRef} placeholder="Author name"/>
                    <input className="" type="date" defaultValue={publishedDate} ref={this.dateRef}/>
                    <input className="" defaultValue={title} ref={this.titleRef} placeholder="Book title"/>
                    <div className="BookEditMode-form-button-wrapper">
                        <input type="button" value="Cancel" onClick={this.props.close}/>
                        <input type="submit" value="Save" onClick={this.authorInputHandler}/>
                    </div>
                </form>
                {(this.state.errMsg.length!==0) && <p>{this.state.errMsg}</p>}
            </div>
            </PopUpWindow>
        );
    }
}

export default BookEditMode;
