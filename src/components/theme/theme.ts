import {DefaultTheme, ColorTheme} from "styled-components";

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
    web: string;
    mobile: string;
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
    fontWeight: {
      light: 400,
      medium: 500,
      bold: 700
    },
    color: {
      dark: "#1C1C1C",
      mid: "#585858",
      light: "#808080",
    },
    heading: {
      one: {
        web: "38px",
        mobile: "30px"
      },
      two: {
        web: "30px",
        mobile: "24px"
      },
      three: {
        web: "26px",
        mobile: "20px"
      },
      four: {
        web: "20px",
        mobile: "16px"
      },
      five: {
        web: "16px",
        mobile: "14px"
      },
    }
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


export const Breakpoints = {
  small: "480px",
  large: "970px"
};
