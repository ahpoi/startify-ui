# startify-ui

React components for faster and easier web development. 

## Why another component library? 

This is a very simple component library where it provides the minimum, but enough to build beautiful themeable UI. 
Most other component library is either over-engineered and very heavy, requires lots of messing around for theming or not themable at all. 

Our component library just take a simple theme object and that's it! Built with Typescript!

Demo of the components can be found [here!](https://ahpoi.github.io/startify-ui/?path=/docs/inputs-button--button-styles)

### Theme 

We make use of styled-components theming support by exporting a <ThemeProvider> wrapper component. This component provides a theme to all React components underneath itself via the context API.

Example our  Theme and properties that are themeable:

```
const mainColorTheme: ColorTheme = {
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
```

### How to use Theme

```

<ThemeProvider theme={MainTheme}>
  <Button>Themed</Button>
</ThemeProvider>
    
```
