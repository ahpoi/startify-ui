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
      sizes: ButtonSizesTheme,
      variants: {
        primary: ButtonVariantTheme,
        primaryOutlined: ButtonVariantTheme,
        primaryOutlinedFilled: ButtonVariantTheme,
        secondary: ButtonVariantTheme
        secondaryOutlined: ButtonVariantTheme,
        secondaryOutlinedFilled: ButtonVariantTheme
      }
    }
    alert: AlertTheme
  }

  export interface ColorTheme {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
  }

  export interface ButtonVariantTheme {
    color: string;
    borderColor: string;
    backgroundColor: string;
    colorOnHover: string;
    borderOnHoverColor: string;
    backgroundOnHoverColor: string;
  }

  export interface ButtonSizesTheme {
    small: string;
    medium: string;
    large: string;
  }

  export interface AlertTheme  {
    base: {
      fontSize: string;
      borderRadius: string;
    }
    variants: {
      success: AlertVariantTheme,
      info: AlertVariantTheme,
      light: AlertVariantTheme
      warning: AlertVariantTheme,
      error: AlertVariantTheme
    }
  }
  export interface AlertVariantTheme {
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
