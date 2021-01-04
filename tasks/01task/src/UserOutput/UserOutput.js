import React, { Component } from 'react';

class UserOutput extends Component {
  render() {
    const container = {
      'width': '60%',
      'padding': '16px',
      'margin': '16px auto',
      'border': '2px solid black',
      'background-color': '#ccc',
      'text-align': 'center',
    };

    const name = {
      'font-size': '30px'
    }

    return (
      <div style={container}>
        <p style={name}>Hello { this.props.username }!!!</p>
        <p>lorem ipsum dolor sit amet usu ei laudem platonem</p>
      </div>
    );
  };
}

export default UserOutput;