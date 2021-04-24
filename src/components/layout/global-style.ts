import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalise";

/**
 * Setups:
 * - normalize
 * - border box
 * - fill body into page
 * - fill root-selector into body
 * Source: https://github.com/basarat/gls/blob/master/src/base/base.tsx
 */

interface Props {
  backgroundColor?: string | number;
  fontFamily?: string;
  rootId?: string;
}

export const GlobalStyle = createGlobalStyle<Props>`
  ${normalize}
  
  html {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.fontFamily};
  }
  
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.backgroundColor};
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  ${({ rootId }) =>
    rootId &&
    `
    #${rootId} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    }`}
`;
