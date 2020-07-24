import * as React from "react";
import {scrollToTop} from "../utils/dom.utils";

/**
 * Run code only once on mount.: https://stackoverflow.com/a/56767883/2443005
 */
export const useMountEffect = (fn: () => void) => React.useEffect(fn, []);

export const useScrollToTop = () => React.useEffect(() => {
  scrollToTop();
}, []);
