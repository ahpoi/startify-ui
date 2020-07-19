import {createGlobalStyle} from "styled-components";
import {normalize} from "./normalise";

/**
 * Setups:
 * - normalize
 * - border box
 * - fill body into page
 * Source: https://github.com/basarat/gls/blob/master/src/base/base.tsx
 */
export const BaseStyle = createGlobalStyle`
  ${normalize}
  
  html {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
`
