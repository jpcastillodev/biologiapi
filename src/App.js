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
          <br />
          {this.state.ADN.length ? <Detect ADN={this.state.ADN} /> : <h1>Ingresa una secuencia de ADN</h1>}
          <input
            className="input"
            type="text"
            placeholder="TAC..."
            onChange={this.handleChange.bind(this)}
          />
        </header>
      </div>
    );
  }
}

export default App;
