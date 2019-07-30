import React, { Component, Fragment } from "react";

import NotificationsToast from "react-notifications-toast";

export default class App extends Component {
  state = {
    isError: false
  };
  componentDidMount() {
    this.fakeGetData();
  }

  fakeGetData = () => {
    setTimeout(() => {
      try {
        throw new Error("Error");
      } catch (e) {
        this.setState({
          isError: true
        });
      }
    }, 1500);
  };

  render() {
    return (
      <Fragment>
        {this.state.isError && (
          <NotificationsToast
            type="error"
            message="test"
            positionFrom="left"
            settings={{
              root: "root"
            }}
          />
        )}
      </Fragment>
    );
  }
}
