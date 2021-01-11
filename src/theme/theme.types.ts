export interface AppTheme {
  typography: TypographyTheme;
  color: ColorTheme;
  radius: RadiusTheme;
}

export interface ColorTheme {
  primary: string;
  primaryDark: string;

  secondary: string;
  secondaryDark: string;

  error: string;
  errorDark: string;
}

export interface TypographyTheme {
  fontFamily: {
    heading: string;
    body: string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    bold: number;
  };
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  color: {
    heading: string;
    body: {
      dark: string;
      mid: string;
      light: string;
    };
  };
}

export interface RadiusTheme {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}
