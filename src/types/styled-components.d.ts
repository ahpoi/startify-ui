import 'styled-components';

declare module "styled-components" {

  export interface DefaultTheme {
    typography: TypographyTheme,
    color: ColorTheme
    border: {
      radiusSmall: number
      radiusMedium: number
      radiusLarge: number
    }
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

}
