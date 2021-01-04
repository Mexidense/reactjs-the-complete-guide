import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    content: '',
    length: 0
  }

  inputLengthHandler = (event) => {
    this.setState({
      content: event.target.value,
      length: event.target.value.length
    });
  }

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.content.split('')];
    chars.splice(charIndex, 1);
    this.setState({ content: chars.join(''), length: chars.length })
  }

  render () {
    let charComponents = (
      <div>
        { this.state.content.split('').map((char, index) => {
          return (
            <CharComponent
              char={ char }
              click={ () => this.deleteCharHandler(index) }
            />
          )
        })}
      </div>
    );

    return (
      <div>
        <input
          type="text"
          onChange={ (event) => this.inputLengthHandler(event)}
          value={ this.state.content }/>
        <p>{ this.state.length }</p>
        <ValidationComponent length={this.state.length} />
        { charComponents }
      </div>
    )
  };
}

export default App;