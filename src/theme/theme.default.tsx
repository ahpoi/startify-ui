import { AppTheme, ColorTheme, TypographyTheme } from "./theme.types";

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
    bold: 700,
  },
  text: {
    xSmall: "10px",
    small: "12px",
    medium: "14px",
    large: "16px",
  },
};

export const DefaultAppBorderTheme = {
  radiusxSmall: 3,
  radiusSmall: 6,
  radiusMedium: 8,
  radiusLarge: 12,
};

export const DefaultAppTheme: AppTheme = {
  typography: DefaultTypographyTheme,
  color: DefaultAppColorTheme,
  border: DefaultAppBorderTheme,
};
