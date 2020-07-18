import 'styled-components';

declare module "styled-components" {

  export interface DefaultTheme {
    typography: TypographyTheme,
    color: ColorTheme
    border: {
      radiusSmall: string
      radiusMedium: string
      radiusLarge: string
    }
  }

  export interface ColorTheme {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
    error: string;
    errorDark: string;

    textDark: string;
    textMid: string;
    textLight: string;
  }

  export interface TypographyTheme {
    fontWeight: {
      light: number,
      medium: number,
      bold: number,
    }
  }

}
