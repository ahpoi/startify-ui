import {ThemeProvider} from "styled-components";
import {BaseStyle, DefaultAppTheme} from "../../src";
import * as React from "react";

export const StoriesDefaultThemeProvider = (props: { children: React.ReactNode }) => {
  return <>
    <BaseStyle/>
    <ThemeProvider theme={DefaultAppTheme}>
      {props.children}
    </ThemeProvider>
  </>;
};
