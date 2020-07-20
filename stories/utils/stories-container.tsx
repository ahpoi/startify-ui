import {ThemeProvider} from "styled-components";
import {GlobalStyle, DefaultAppTheme} from "../../src";
import * as React from "react";

export const StoriesDefaultThemeProvider = (props: { children: React.ReactNode }) => {
  return <>
    <GlobalStyle/>
    <ThemeProvider theme={DefaultAppTheme}>
      {props.children}
    </ThemeProvider>
  </>;
};
