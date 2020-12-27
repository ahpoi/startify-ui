# startify-ui

React components for faster and easier web development.

This is a very simple component library where it provides the minimum, but enough to build beautiful UI by only proving the primary and secondary color.
Used by lots of my internal projects.

Demo of the components can be found [here!](https://ahpoi.github.io/startify-ui/?path=/docs/inputs-button--button-styles)

### Theme

Example our Theme and properties that are themeable:

```
export const DefaultAppColorTheme: ColorTheme = {
  primary: "#172B4D",
  primaryDark: "#051632",

  secondary: "#008DA6",
  secondaryDark: "#027187",

  error: "#D61834",
  errorDark: "#BD152E",

  heading: "#2A2A2A",

  textDark: "#2A2A2A",
  textMid: "#585858",
  textLight: "#bdbdbd",
};

export const DefaultTypographyTheme: TypographyTheme = {
  fontWeight: {
    light: 400,
    medium: 500,
    bold: 700
  },
  text: {
    small: "12px",
    medium: "14px",
    large: "16px"
  }
};

export const DefaultAppBorderTheme = {
  radiusSmall: 4,
  radiusMedium: 8,
  radiusLarge: 12
}

export const DefaultAppTheme: AppTheme = {
  typography: DefaultTypographyTheme,
  color: DefaultAppColorTheme,
  border: DefaultAppBorderTheme
};
```

### How to use Theme

```
<>
    <GlobalStyle rootId={'root'} fontFamily={"Montserrat,Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif"}/>
    <StartifyThemeProvider theme={MainTheme}>
      <Button>Themed</Button>
    </StartifyThemeProvider>
</>
```
