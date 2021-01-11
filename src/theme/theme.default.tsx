import { AppTheme, ColorTheme, TypographyTheme } from "./theme.types";

export const DefaultAppColorTheme: ColorTheme = {
  primary: "#172B4D",
  primaryDark: "#051632",

  secondary: "#008DA6",
  secondaryDark: "#027187",

  error: "#D61834",
  errorDark: "#BD152E",
};

export const DefaultTypographyTheme: TypographyTheme = {
  fontFamily: {
    heading: "Helvetica,Arial,sans-serif",
    body: "Helvetica,Arial,sans-serif",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  color: {
    heading: "#2A2A2A",
    body: {
      dark: "#2A2A2A",
      mid: "#585858",
      light: "#bdbdbd",
    },
  },
  size: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
  },
};

export const DefaultAppRadiusTheme = {
  xs: 3,
  sm: 6,
  md: 8,
  lg: 12,
};

export const DefaultAppTheme: AppTheme = {
  color: DefaultAppColorTheme,
  typography: DefaultTypographyTheme,
  radius: DefaultAppRadiusTheme,
};
