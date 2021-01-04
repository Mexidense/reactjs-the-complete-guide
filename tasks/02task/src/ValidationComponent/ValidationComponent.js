import React, { Component } from 'react';

class ValidationComponent extends Component {
  render() {
    let message = 'Text long enough';

    if ( this.props.length <= 5 ) {
      message = 'Text too short';
    }

    return (
      <div>
        <p>{ message }</p>
      </div>
    )
  }
}

export default ValidationComponent;