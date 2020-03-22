import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props) {

//   return <h2>{props.title}</h2>
// };

// arrow function
const Hello = props => <h2>{props.title}</h2>

function Text(props) {
  const {
    isActivated,
    textbool,
    ObjectWithInfo } = props

  return <div>
    <p>{ObjectWithInfo.key} </p>
    <p>{textbool}</p>
    <p>{isActivated}</p>
  </div>
}

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 };
  }
  render() {
    return <p>{this.state.contador}</p>
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Hello
            title="Hello React World!!!"
          />
          <Text
            ObjectWithInfo={{ key: "First Value", key2: "Value2" }}
            isActivated={false}
          />
          <Contador  ></Contador>
        </p>
      </header>
    </div>
  );
}

export default App;
