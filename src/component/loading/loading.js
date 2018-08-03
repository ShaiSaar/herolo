import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {

  state = {
    text : ".",
  }

  componentDidMount(){
   this.interval = setInterval(()=>this.addPoint(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  addPoint=()=>{
      this.setState((prevState)=> {return {text: prevState.text+"."}})

  }

  render() {
    return (
      <div className="Loading-wrapper">
          <h2>{`Loading${this.state.text}`}</h2>
      </div>
    );
  }
}

export default Loading;
