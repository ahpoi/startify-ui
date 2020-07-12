import {DefaultTheme, ColorTheme} from "styled-components";

declare module "styled-components" {

  export interface DefaultTheme {
    typography: {
      fontFamily: string;
    },
    button: {
      base: {
        fontSize: string;
        borderRadius: string;
      }
      variants: {
        primary: ButtonTheme,
        primaryOutlined: ButtonTheme,
        secondary: ButtonTheme
        secondaryOutlined: ButtonTheme
      }
    }
  }

  interface ColorTheme {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
  }

  export interface ButtonTheme {
    color: string;
    borderColor: string;
    borderOnHoverColor: string;
    backgroundColor: string;
    backgroundOnHoverColor: string;
  }

  interface TypographySizeTheme {
    web: number;
    tablet: number;
    mobile: number;
  }
}

export const mainColorTheme: ColorTheme = {
  primary: "#172B4D",
  primaryDark: "#071E45",
  secondary: "#008DA6",
  secondaryDark: "#027187",
};

export const MainTheme: DefaultTheme = {
  typography: {
    fontFamily: "",
  },
  button: {
    base: {
      fontSize: "14px",
      borderRadius: "8px"
    },
    variants: {
      primary: {
        backgroundColor: mainColorTheme.primary,
        backgroundOnHoverColor: mainColorTheme.primaryDark,
        borderColor: mainColorTheme.primary,
        borderOnHoverColor: mainColorTheme.primaryDark,
        color: "white"
      },
      primaryOutlined: {
        backgroundColor: "transparent",
        backgroundOnHoverColor: "transparent",
        borderColor: mainColorTheme.primary,
        borderOnHoverColor: mainColorTheme.primaryDark,
        color: mainColorTheme.primary,
      },
      secondary: {
        backgroundColor: mainColorTheme.secondary,
        backgroundOnHoverColor: mainColorTheme.secondaryDark,
        borderColor: mainColorTheme.secondary,
        borderOnHoverColor: mainColorTheme.secondaryDark,
        color: "white"
      },
      secondaryOutlined: {
        backgroundColor: "transparent",
        backgroundOnHoverColor: "transparent",
        borderColor: mainColorTheme.secondary,
        borderOnHoverColor: mainColorTheme.secondaryDark,
        color: mainColorTheme.secondary,
      },
    }
  }
};
