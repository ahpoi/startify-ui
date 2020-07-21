export interface AppTheme {
  typography: TypographyTheme,
  color: ColorTheme
  border: BorderTheme
}

export interface ColorTheme {
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryDark: string;
  error: string;
  errorDark: string;

  heading: string;

  textDark: string;
  textMid: string;
  textLight: string;
}

export interface TypographyTheme {
  fontWeight: {
    light: number,
    medium: number,
    bold: number
  }
  text: {
    small: string,
    medium: string,
    large: string;
  }
}

export interface BorderTheme {
  radiusxSmall: number
  radiusSmall: number
  radiusMedium: number
  radiusLarge: number
}
