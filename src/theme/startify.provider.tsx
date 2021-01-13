import * as React from "react";

import { ThemeProvider } from "styled-components";
import { appTheme, AppTheme } from "../styles/theme";
import { GlobalStyle } from "..";

type Props = {
  rootId?: string;
  theme?: AppTheme;
  children?: React.ReactNode;
};

export const StartifyProvider = (props: Props) => {
  const { theme = appTheme, children } = props;
  return (
    <>
      <GlobalStyle rootId={props.rootId} fontFamily={theme.typography.fontFamily.body} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
