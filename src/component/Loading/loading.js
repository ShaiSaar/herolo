import React, { PureComponent } from 'react';
import './loading.css';

class Loading extends PureComponent {

  state = {text : "."}

  componentDidMount(){

   this.interval = setInterval(()=>{
       this.setState((prevState)=> {
           return (prevState.text.length===3 ? {text: "."} : {text: prevState.text+"."} )
       })},1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
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
