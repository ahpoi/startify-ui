import styled, {ThemeProvider} from "styled-components";
import {DefaultAppTheme} from "../../src";
import * as React from "react";

export const StoriesDefaultThemeProvider = (props: { children: React.ReactNode }) =>
    <ThemeProvider theme={DefaultAppTheme}>
      {props.children}
    </ThemeProvider>;

export const StoriesVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &>*+* {
   margin-top: 16px
  };
`;
