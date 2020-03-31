import React, { Component } from 'react';
import './App.css'
import logo from './logo.svg'
import ADN from './api/biology'
class App extends Component {

  constructor() {
    super();
    this.onClick.bind(this)
  }
  onClick({ target }) {
    console.log(target)
  }
  render() {
    return (
      <>
      <ADN/>
        {/* <div className="App" >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Selecciona en que materias quieres ayuda</h2>
            <h3><u>Opciones</u></h3>
            <div>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.onClick} id="biology">Biologia</button>
              <button type="button" className="btn btn-danger btn-lg" onClick={this.onClick} id="math">Matematica</button>
              <br />
              <button type="button" className="btn btn-warning btn-lg" onClick={this.onClick} id="stadistic">Estadistica</button>
              <button type="button" className="btn btn-success btn-lg" onClick={this.onClick} id="_">Fisica</button>
            </div>
          </header>
        </div> */}
      </>
    );
  }
}

export default App;
