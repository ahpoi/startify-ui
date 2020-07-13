declare module "styled-components" {

  export interface DefaultTheme {
    typography: {
      fontFamily: string;
      fontWeight: {
        light: number,
        medium: number,
        bold: number,
      }
      color: {
        dark: string;
        mid: string;
        light: string;
      },
      heading: {
        one: TypographySizeTheme,
        two: TypographySizeTheme,
        three: TypographySizeTheme,
        four: TypographySizeTheme,
        five: TypographySizeTheme
      },
      paragraph: TypographySizeTheme
    },
    button: {
      base: {
        fontSize: string;
        borderRadius: string;
      }
      variants: {
        primary: ButtonTheme,
        primaryOutlined: ButtonTheme,
        primaryOutlinedFilled: ButtonTheme,
        secondary: ButtonTheme
        secondaryOutlined: ButtonTheme,
        secondaryOutlinedFilled: ButtonTheme
      }
    }
    alert: {
      base: {
        fontSize: string;
        borderRadius: string;
      }
      variants: {
        success: AlertTheme,
        info: AlertTheme,
        light: AlertTheme
        warning: AlertTheme,
        error: AlertTheme
      }
    }
  }

  export interface ColorTheme {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
  }

  export interface ButtonTheme {
    color: string;
    borderColor: string;
    backgroundColor: string;
    colorOnHover: string;
    borderOnHoverColor: string;
    backgroundOnHoverColor: string;
  }

  export interface AlertTheme {
    color: string;
    borderColor: string;
    backgroundColor: string;
  }

  export interface TypographySizeTheme {
    web: string;
    mobile: string;
  }

}

export const Breakpoints = {
  small: "480px",
  large: "970px"
};
