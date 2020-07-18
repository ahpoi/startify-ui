import {DefaultTheme, ColorTheme, TypographyTheme} from "styled-components";

export const DefaultAppColorTheme: ColorTheme = {
  primary: "#172B4D",
  primaryDark: "#051632",

  secondary: "#008DA6",
  secondaryDark: "#027187",

  error: "#D61834",
  errorDark: "#BD152E",

  textDark: "#2A2A2A",
  textMid: "#585858",
  textLight: "#bdbdbd",
};

export const DefaultTypographyTheme: TypographyTheme = {
  fontWeight: {
    light: 400,
    medium: 500,
    bold: 700
  }
};

export const DefaultAppTheme: DefaultTheme = {
  typography: DefaultTypographyTheme,
  color: DefaultAppColorTheme,
  border: {
    radiusSmall: "4px",
    radiusMedium: "8px",
    radiusLarge: "12px"
  }
};
