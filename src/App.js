import React, { Component } from 'react';
import Detect from './api/biology/index'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ADN: ""
    }
  }

  handleChange({ target }) {
    this.setState({ ADN: target.value })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bienvenido a <em>Biologiapi</em>
          </p>
          <br/>
          <Detect ADN={this.state.ADN} />
          <input
            className="input"
            type="text"
            placeholder="Ingrese la cadena de ADN"
            onChange={this.handleChange.bind(this)}
          />
        </header>
      </div>
    );
  }
}

export default App;
