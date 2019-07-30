/**
 * @class NotificationsToast
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { NotificationWrapper } from "./containers/NotificationWrapper";
import { IAttributes } from "./models/props";

export default class NotificationsToast extends React.Component<IAttributes> {
  private el: HTMLElement;
  private root: HTMLElement | null;

  constructor(props: any) {
    super(props);

    this.el = document.createElement("div");
    this.el.classList.add('react-notifications-toast-container')
  }
  componentDidMount(): void {
    this.root = document.body;
    this.root.appendChild(this.el);
  }

  removeNotification = (): void => {
    if (this.root) {
      const selectors = document.querySelectorAll('.react-notifications-toast-container');
      Array.from(selectors).forEach((item: any) => item.remove());
    }
  };

  render() {
    const { type, message, positionFrom } = this.props;

    return ReactDOM.createPortal(
      <React.Fragment>
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
