import {DefaultTheme, ColorTheme, AlertTheme} from "styled-components";

export const DefaultAppColorTheme: ColorTheme = {
  primary: "#172B4D",
  primaryDark: "#051632",
  secondary: "#008DA6",
  secondaryDark: "#027187",
};

export const DefaultAppAlertTheme: AlertTheme = {
  base: {
    fontSize: "14px",
    borderRadius: "2px",
  },
  variants: {
    success: {
      color: "#155724",
      backgroundColor: "#D4EDDA",
      borderColor: "#C3E6CB"
    },
    light: {
      color: "#818182",
      backgroundColor: "#fafafa",
      borderColor: "#FDFDFE"
    },
    info: {
      color: "#0C5460",
      backgroundColor: "#D1ECF1",
      borderColor: "#BEE5EB"
    },
    warning: {
      color: "#856404",
      backgroundColor: "#FFF3CD",
      borderColor: "#FFEEBA"
    },
    error: {
      color: "#721C24",
      backgroundColor: "#F8D7DA",
      borderColor: "#F5C6CB"
    }
  }
};

export const DefaultAppTheme: DefaultTheme = {
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
    sizes: {
      small: "12px",
      medium: "14px",
      large: "18px"
    },
    variants: {
      primary: {
        color: "white",
        backgroundColor: DefaultAppColorTheme.primary,
        borderColor: DefaultAppColorTheme.primary,
        colorOnHover: "white",
        borderOnHoverColor: DefaultAppColorTheme.primaryDark,
        backgroundOnHoverColor: DefaultAppColorTheme.primaryDark,
      },
      primaryOutlined: {
        color: DefaultAppColorTheme.primary,
        backgroundColor: "transparent",
        borderColor: DefaultAppColorTheme.primary,
        colorOnHover: DefaultAppColorTheme.primary,
        backgroundOnHoverColor: "transparent",
        borderOnHoverColor: DefaultAppColorTheme.primaryDark,
      },
      primaryOutlinedFilled: {
        color: DefaultAppColorTheme.primary,
        backgroundColor: "transparent",
        borderColor: DefaultAppColorTheme.primary,
        colorOnHover: "white",
        backgroundOnHoverColor: DefaultAppColorTheme.primary,
        borderOnHoverColor: DefaultAppColorTheme.primary,
      },
      secondary: {
        color: "white",
        backgroundColor: DefaultAppColorTheme.secondary,
        borderColor: DefaultAppColorTheme.secondary,
        colorOnHover: "white",
        backgroundOnHoverColor: DefaultAppColorTheme.secondaryDark,
        borderOnHoverColor: DefaultAppColorTheme.secondaryDark,
      },
      secondaryOutlined: {
        color: DefaultAppColorTheme.secondary,
        backgroundColor: "transparent",
        borderColor: DefaultAppColorTheme.secondary,
        colorOnHover: DefaultAppColorTheme.secondary,
        backgroundOnHoverColor: "transparent",
        borderOnHoverColor: DefaultAppColorTheme.secondaryDark,
      },
      secondaryOutlinedFilled: {
        color: DefaultAppColorTheme.secondary,
        backgroundColor: "transparent",
        borderColor: DefaultAppColorTheme.secondary,
        colorOnHover: "white",
        backgroundOnHoverColor: DefaultAppColorTheme.secondary,
        borderOnHoverColor: DefaultAppColorTheme.secondaryDark,
      },
    }
  },
  alert: DefaultAppAlertTheme
};
