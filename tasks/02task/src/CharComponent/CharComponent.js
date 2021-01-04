import React, { Component } from 'react';
import './ChartComponent.css';

class CharComponent extends Component {
  render() {
    return (
      <div className="ChartComponent" onClick={ this.props.click }>
        <p>{ this.props.char }</p>
      </div>
    );
  }
}

export default CharComponent;