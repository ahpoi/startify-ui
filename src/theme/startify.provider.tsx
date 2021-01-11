import * as React from "react";

import { ThemeProvider } from "styled-components";
import { AppTheme } from "./theme.types";
import { DefaultAppTheme } from "./theme.default";
import { GlobalStyle } from "..";

type Props = {
  rootId?: string;
  theme?: AppTheme;
  children?: React.ReactNode;
};

export const StartifyProvider = (props: Props) => {
  const { theme = DefaultAppTheme, children } = props;
  return (
    <>
      <GlobalStyle rootId={props.rootId} fontFamily={theme.typography.fontFamily.base} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
