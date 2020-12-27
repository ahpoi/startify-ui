import * as React from "react";

import { ThemeProvider } from "styled-components";
import { AppTheme } from "./theme.types";
import { DefaultAppTheme } from "./theme.default";

export const StartifyThemeProvider = (props: { theme?: AppTheme; children?: React.ReactNode }) => {
  const { theme = DefaultAppTheme, children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
