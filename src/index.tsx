/**
 * @class NotificationsToast
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { NotificationWrapper } from "./containers/NotificationWrapper";
import { createGlobalStyle } from "styled-components";
import { IAttributes } from "./models/props";

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
`;

export default class NotificationsToast extends React.Component<IAttributes> {
  private readonly el: HTMLElement;
  private root: HTMLElement | null;

  constructor(props: any) {
    super(props);

    this.el = document.createElement("div");
  }
  componentDidMount(): void {
    this.root = document.body;
    this.root.appendChild(this.el);
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.removeChild(this.el);
    }
  }

  removeNotification = (): void => {
    if (this.root) {
      this.root.removeChild(this.el);
    }
  };

  render() {
    const { type, message, positionFrom } = this.props;

    return ReactDOM.createPortal(
      <React.Fragment>
        <GlobalStyle />
        <NotificationWrapper
          type={type}
          message={message}
          positionFrom={positionFrom}
          removeNotification={this.removeNotification}
        />
      </React.Fragment>,
      this.el
    );
  }
}
