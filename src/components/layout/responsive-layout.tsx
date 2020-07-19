import * as React from "react";
import {debounce} from "../../utils/common.utils";

export interface Props {
  renderMobile?: () => React.ReactElement<any>,
  renderDesktop?: () => React.ReactElement<any>,
  breakpoint?: number
}

export class ResponsiveLayout extends React.Component<Props> {
  dispose: Function = () => null;

  componentDidMount() {
    this.dispose = optimizedResize.on(debounce(() => {
      this.forceUpdate();
    }, 100)).dispose;
  }

  componentWillUnmount() {
    this.dispose();
  }

  render() {
    const { breakpoint, renderDesktop, renderMobile } = this.props;
    const phoneWidth = breakpoint ?? 576;
    const width = typeof window !== "undefined" ? window.document.body.clientWidth : phoneWidth;
    if (width <= phoneWidth) {
      return renderMobile ? renderMobile() : <></>;
    } else {
      return renderDesktop ? renderDesktop() : <></>;
    }
  }
}

const optimizedResize = (function () {
  var callbacks: any[] = [],
      running = false;
  var addedFirst = false;

  function resize() {
    if (!running) {
      running = true;
      if (typeof window !== undefined && window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  function runCallbacks() {
    callbacks.forEach(function (callback) {
      callback();
    });
    running = false;
  }

  function addCallback(callback: any) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  function removeCallback(callback: any) {
    if (callback) {
      var callbackIndex = callbacks.indexOf(callback);
      if (callbackIndex > -1) callbacks.splice(callbackIndex, 1);
    }
  }

  return {
    on: function (callback: any) {
      if (!addedFirst) {
        typeof window !== undefined && window.addEventListener("resize", resize);
        addedFirst = true;
      }
      addCallback(callback);
      return { dispose: () => removeCallback(callback) };
    },
    off: (callback: any) => {
      removeCallback(callback);
    }
  };
}());


