import React, { Component } from 'react';
import './App.css';
import BookList from "../../container/book_list/book_list";
import {Switch} from "react-router";
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App-wrapper">
              <Switch>
                  <Route path='/bookList' name='bookList' exact={true} strict={true} component={BookList}/>
                  <Redirect to='/bookList' />
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
