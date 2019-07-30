import React, { Component, Fragment } from "react";

import NotificationsToast from "react-notifications-toast";

export default class App extends Component {
  state = {
    isError: false
  };

  fakeGetData = () => {
    this.setState({
      isError: true
    });
  };

  resetState = () => {
    this.setState({
      isError: false
    })
  }

  render() {
    return (
      <Fragment>
        {this.state.isError && (
          <NotificationsToast
            type="error"
            message="test"
            positionFrom="right"
            settings={{
              root: "root"
            }}
          />
        )}
        <button onClick={this.fakeGetData}>Test</button>
        <button onClick={this.resetState}>Reset</button>
      </Fragment>
    );
  }
}
