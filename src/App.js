import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello (props){
//  return <h2>{props.title}</h2>
//}

// const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)
    return <div>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
  }
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello from props" />
      </div>
      <Text
       arrayOfNumbers={[2, 3 ,10]}
       objectWithInfo={{key: 'firstValue', key2: 'otherValue'}}
      />
    </div>
  );
}

export default App;
