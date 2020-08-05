import * as React from "react";
import {scrollToTop} from "../utils/dom.utils";

/**
 * Run code only once on mount.: https://stackoverflow.com/a/56767883/2443005
 */
export const useMountEffect = (fn: () => void) => React.useEffect(fn, []);

export const useScrollToTop = () => React.useEffect(() => {
  scrollToTop();
}, []);

export const useKeyboardEvent = (key: any, callback: () => void) => {
  React.useEffect(() => {
    const handler = (event?: KeyboardEvent) => {
      if (event?.key?.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    };
    window.addEventListener("keydown", handler, false);
    return () => {
      window.removeEventListener("keydown", handler, false);
    };
  }, []);
};

/**
 * https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f
 */
export const useOnOutsideClick = (node: React.RefObject<any>, handler: (e: Event) => any) => {
  React.useEffect(() => {
    const listener = (e: Event) => {
      if (node.current?.contains(e.target as Node)) {
      } else {
        handler(e);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [node, handler]);
};
