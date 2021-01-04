import UserOutput from "./UserOutput/UserOutput";
import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    'username': 'Mexidense'
  };

  changeUsernameHandler = (event) => {
    this.setState({
      'username': event.target.value
    })
  }

  render () {
    return (
      <div>
        <UserInput
          changed={this.changeUsernameHandler}
          currentName={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="Manolo" />
        <UserOutput username="Pepe" />
      </div>
    );
  }
}

export default App;
