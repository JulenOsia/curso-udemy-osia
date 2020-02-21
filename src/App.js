import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contador extends Component{
  constructor() {
    super()
    this.state = {contador: 1}
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1})
    }, 1000)
  }  
  
  
  render(){
    return <span>El contador está a {this.state.contador}.</span>
  }
}


class App extends Component {
    render(){
      return (
        <div className="App">
          <p>Primer componente con state</p>
          <Contador />
        </div>
      );
    }
}

export default App;
