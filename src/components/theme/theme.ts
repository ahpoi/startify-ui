declare module "styled-components" {

  export interface DefaultTheme {
    typography: TypographyTheme,
    button: ButtonTheme,
    alert: AlertTheme,
    badge: BadgeTheme,
    input: {
      base: {
        classNameError: string;
      }
      label: {
        color: string;
        colorError: string;
        fontSize: string;
        fontSizeError: string;
        fontWeight: number
        fontWeightError: number;
      }
      fontSize: string;
      fontWeight: number;
      color: string;
      backgroundColor: string;
      backgroundColorDisabled: string;
      borderRadius: string;
      borderColor: string;
      borderColorOnHover: string;
      borderColorError: string;
    }
  }

  export interface ColorTheme {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
  }

  export interface TypographyTheme {
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
  }

  export interface ButtonTheme {
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

  export interface AlertTheme {
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

  export interface BadgeTheme {
    base: {
      fontSize: string;
      fontWeight: number;
      borderRadius: string;
    }
    variants: {
      primary: BadgeVariantTheme,
      secondary: BadgeVariantTheme,
      success: BadgeVariantTheme,
      info: BadgeVariantTheme,
      warning: BadgeVariantTheme,
      error: BadgeVariantTheme
    }
  }

  export interface BadgeVariantTheme {
    color: string;
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
