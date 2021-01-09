# startify-ui

React components for faster and easier web development.

This is a very simple component library where it provides the minimum, but enough to build beautiful UI by only proving the primary and secondary color.

Demo of the components can be found [here!](https://ahpoi.github.io/startify-ui/?path=/docs/inputs-button--button-styles)

### Theme

Example our Theme and properties that are themeable:

```
export const AppColorTheme: ColorTheme = {
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

export const AppTypographyTheme: TypographyTheme = {
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

export const AppBorderTheme = {
  radiusSmall: 4,
  radiusMedium: 8,
  radiusLarge: 12
}

export const AppTheme: AppTheme = {
  typography: DefaultTypographyTheme,
  color: DefaultAppColorTheme,
  border: DefaultAppBorderTheme
};
```

```
<>
    <GlobalStyle rootId={'root'} fontFamily={"Montserrat,Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif"}/>
    <StartifyThemeProvider theme={AppTheme}>
      <Button>Themed</Button>
    </StartifyThemeProvider>
</>
```

### Improvements

- More focus on accessibility
- Remove react-tether dependency and create own Tooltip component
- Example integrations