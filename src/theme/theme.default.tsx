import {AppTheme, ColorTheme, TypographyTheme} from "./theme.types";

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
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700
  },
  text: {
    small: "12px",
    medium: "14px",
    large: "16px"
  }
};

export const DefaultAppBorderTheme = {
  radiusxSmall: 3,
  radiusSmall: 6,
  radiusMedium: 8,
  radiusLarge: 12
};

export const DefaultShadowTheme = {
  small: "0px 1px 2px rgba(0, 0, 0, 0.1)",
  medium: "0px -1px 25px rgba(0, 0, 0, 0.12)",
  large: "0px 9px 40px rgba(0, 0, 0, 0.16)"
};

export const DefaultAppTheme: AppTheme = {
  typography: DefaultTypographyTheme,
  color: DefaultAppColorTheme,
  border: DefaultAppBorderTheme,
  shadow: DefaultShadowTheme
};
