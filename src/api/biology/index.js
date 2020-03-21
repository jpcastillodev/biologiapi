import React, { Component } from 'react'
import { allAboutIt } from './adn'
import logo from '../../logo.svg';
import '../../App.css';

class ADN extends Component {
    render() {
        try {
            const dataTable = Object.entries(allAboutIt(this.props.ADN || ""))
            return (<>
                {dataTable.map(
                    ([data, result], key) => {
                        return (
                        <p key={key}>
                            <b>{data}</b> : {result}
                        </p>)
                    })}
            </>)
        } catch (e) {
            return (
            <h1>
                <b>
                    {e.toString()}
                </b>
            </h1>
            )
        }
    }

}

class App extends Component {
    constructor() {
      super();
      this.state = { ADN: "" }
    }
  
    handleChange({ target }) {
      console.log(target)
      this.setState({ ADN: target.value.replace(/ |-/g,"") })
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
            {
              this.state.ADN.length ?
                <ADN ADN={this.state.ADN} /> :
                <h1>Ingresa una secuencia de ADN</h1>
            }
            <input
              className="input"
              type="text"
              placeholder="recuerda ingresar una base iniciadora, por ej: 'Tac'..."
              onChange={this.handleChange.bind(this)}
            />
          </header>
        </div>
      );
    }
  }
export default App 