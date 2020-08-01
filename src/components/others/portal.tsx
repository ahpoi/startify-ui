import * as React from "react";
import {createPortal} from "react-dom";

export class Portal extends React.Component {

  private container: HTMLDivElement;

  constructor(props?: any) {
    super(props);
    this.container = document.createElement("div");
  }

  componentDidMount = () => {
    document.body.appendChild(this.container);
  };

  componentWillUnmount = () => {
    document.body.removeChild(this.container);
  };

  render() {
    const { children } = this.props;
    return createPortal(children, this.container);
  }
}
