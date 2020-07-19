import {DefaultTheme, ColorTheme, TypographyTheme} from "styled-components";

export const DefaultAppColorTheme: ColorTheme = {
  primary: "#172B4D",
  primaryDark: "#051632",

  secondary: "#008DA6",
  secondaryDark: "#027187",

  error: "#D61834",
  errorDark: "#BD152E",

  heading: "#2A2A2A",

  textDark: "#2A2A2A",
  textMid: "#585858",
  textLight: "#bdbdbd",
};

export const DefaultTypographyTheme: TypographyTheme = {
  fontWeight: {
    light: 400,
    medium: 500,
    bold: 700
  },
  text: {
    small: "12px",
    medium: "14px",
    large: "16px"
  }
};

export const DefaultAppTheme: DefaultTheme = {
  typography: DefaultTypographyTheme,
  color: DefaultAppColorTheme,
  border: {
    radiusSmall: 4,
    radiusMedium: 8,
    radiusLarge: 12
  }
};
