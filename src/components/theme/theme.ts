import {DefaultTheme} from "styled-components";

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

  interface LinkTheme {
    color: string;
    onHoverColor: string;
  }

  interface TypographySizeTheme {
    web: number;
    tablet: number;
    mobile: number;
  }
}

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
        backgroundColor: "#172B4D",
        backgroundOnHoverColor: "#071E45",
        borderColor: "#071E45",
        borderOnHoverColor: "#172B4D",
        color: "white"
      },
      primaryOutlined: {
        backgroundColor: "transparent",
        backgroundOnHoverColor: "transparent",
        borderColor: "#172B4D",
        borderOnHoverColor: "#172B4D",
        color: "#172B4D"
      },
      secondary: {
        backgroundColor: "#008DA6",
        backgroundOnHoverColor: "#027187",
        borderColor: "#008DA6",
        borderOnHoverColor: "#008DA6",
        color: "white"
      },
      secondaryOutlined: {
        backgroundColor: "transparent",
        backgroundOnHoverColor: "transparent",
        borderColor: "#008DA6",
        borderOnHoverColor: "#027187",
        color: "#008DA6"
      },
    }
  }
};
