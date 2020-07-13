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
    backgroundColor: string;
    colorOnHover: string;
    borderOnHoverColor: string;
    backgroundOnHoverColor: string;
  }

  interface TypographySizeTheme {
    web: string;
    mobile: string;
  }

}

export const mainColorTheme: ColorTheme = {
  primary: "#172B4D",
  primaryDark: "#051632",
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
    },
    paragraph: {
      web: "14px",
      mobile: "12px"
    }
  },
  button: {
    base: {
      fontSize: "14px",
      borderRadius: "4px"
    },
    variants: {
      primary: {
        color: "white",
        backgroundColor: mainColorTheme.primary,
        borderColor: mainColorTheme.primary,
        colorOnHover: 'white',
        borderOnHoverColor: mainColorTheme.primaryDark,
        backgroundOnHoverColor: mainColorTheme.primaryDark,
      },
      primaryOutlined: {
        color: mainColorTheme.primary,
        backgroundColor: "transparent",
        borderColor: mainColorTheme.primary,
        colorOnHover: mainColorTheme.primary,
        backgroundOnHoverColor: "transparent",
        borderOnHoverColor: mainColorTheme.primaryDark,
      },
      primaryOutlinedFilled: {
        color: mainColorTheme.primary,
        backgroundColor: "transparent",
        borderColor: mainColorTheme.primary,
        colorOnHover: "white",
        backgroundOnHoverColor: mainColorTheme.primary,
        borderOnHoverColor: mainColorTheme.primary,
      },
      secondary: {
        color: "white",
        backgroundColor: mainColorTheme.secondary,
        borderColor: mainColorTheme.secondary,
        colorOnHover: 'white',
        backgroundOnHoverColor: mainColorTheme.secondaryDark,
        borderOnHoverColor: mainColorTheme.secondaryDark,
      },
      secondaryOutlined: {
        color: mainColorTheme.secondary,
        backgroundColor: "transparent",
        borderColor: mainColorTheme.secondary,
        colorOnHover: mainColorTheme.secondary,
        backgroundOnHoverColor: "transparent",
        borderOnHoverColor: mainColorTheme.secondaryDark,
      },
      secondaryOutlinedFilled: {
        color: mainColorTheme.secondary,
        backgroundColor: "transparent",
        borderColor: mainColorTheme.secondary,
        colorOnHover: "white",
        backgroundOnHoverColor: mainColorTheme.secondary,
        borderOnHoverColor: mainColorTheme.secondaryDark,
      },
    }
  }
};


export const Breakpoints = {
  small: "480px",
  large: "970px"
};
