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
  render() {
    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props

    const mappedNumbers = arrayOfNumbers.map(multiply)
    return <div>
      {title}
      <p>{mappedNumbers.join(', ')}</p>
      <p>{objectWithInfo.key}</p>
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
        arrayOfNumbers={[2, 3, 10]}
        objectWithInfo={{ key: 'firstValue', key2: 'otherValue' }}
        multiply={(number) => number * 4}
        title={<h1>Este es el titulo</h1>}
      />
    </div>
  );
}

export default App;
