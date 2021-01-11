# Startify UI

Startify UI provides a set of reusable, and composable React components that make it super easy to create web
application. Jump [here](https://ahpoi.github.io/startify-ui) to see the components in action.

## Features

- Theamable by only providing properties such as `primary-color, secondary-color, border-radius` and yet have a full
  customised product. 🚀
- Lightweight: `26.7KB` minified/gzipped
- Written in typescript!

## Quickstart

Wrap your application with the `StartifyProvider`.

```tsx
import React from 'react';
import ReactDOM from "react-dom";
import {StartifyProvider} from "startify-ui";

ReactDOM.render(
    <StartifyProvider>
        <HomeRoute/>
    </StartifyProvider>
    , document.getElementById("root")
);

```

## Theme

```tsx

import React from 'react';
import ReactDOM from "react-dom";

ReactDOM.render(
    <StartifyProvider rootId={"root"} theme={appTheme}>
        <HomeRoute/>
    </StartifyProvider>
    , document.getElementById("root")
);

const appTheme: AppTheme = {
    color: {
        primary: "#172B4D",
        primaryDark: "#051632",
        secondary: "#008DA6",
        secondaryDark: "#027187",
        error: "#D61834",
        errorDark: "#BD152E",
    },
    typography: {
        fontFamily: {
          fontFamily: {
            heading: "Helvetica,Arial,sans-serif",
            body: "Helvetica,Arial,sans-serif",
          },
          fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            bold: 700,
          },
          color: {
            heading: "#2A2A2A",
            body: {
              dark: "#2A2A2A",
              light: "#585858",
              mid: "#bdbdbd",
            },
          },
          size: {
            xs: "10px",
            sm: "12px",
            md: "14px",
            lg: "16px",
          },
        },
    radius: {
      xs: "3px",
      sm: "6px",
      md: "8px",
      lg: "12px",
    }
}}
```

### Why

We considered other options before creating our own. Here is our opinion:

- Written in typescript
- Focus on startup developments, components such as `Page, PageBody, TextInputField (Label, Error), Error Modal, Error Modal (Retry),
  Skeleton PlaceHolder` make it much faster to build beautiful yet filled with your business
  logic.
- Do not pull thousands of other dependencies [(70% self)](https://bundlephobia.com/result?p=startify-ui)

### Improvements

- More focus on accessibility with WAI-ARIA guidelines specifications
- Remove react-tether as a dependency
- Create an `extendTheme` function to only override specified property