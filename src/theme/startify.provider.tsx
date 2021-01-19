import * as React from "react";

import { ThemeProvider } from "styled-components";
import { appTheme, AppTheme } from "./styles/theme";
import { GlobalStyle, mergeDeep } from "..";
import { RecursivePartial } from "../components/others/types";

type Props = {
  rootId?: string;
  theme?: RecursivePartial<AppTheme>;
  children?: React.ReactNode;
};

export const StartifyProvider = (props: Props) => {
  const { theme, children } = props;
  const updatedTheme: AppTheme = mergeDeep(appTheme, theme);
  return (
    <>
      <GlobalStyle rootId={props.rootId} fontFamily={updatedTheme.typography.fontFamily.body} />
      <ThemeProvider theme={updatedTheme}>{children}</ThemeProvider>
    </>
  );
};
