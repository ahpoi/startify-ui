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

        heading: "#2A2A2A",

        textDark: "#2A2A2A",
        textMid: "#585858",
        textLight: "#bdbdbd",
    },
    typography: {
        fontFamily: {
            base: 'Montserrat, Helvetica'
        },
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
    },
    border: {
        radiusxSmall: 2,
        radiusSmall: 4,
        radiusMedium: 8,
        radiusLarge: 12
    }
};
```

### Why

We considered other options before creating our own. Here is our opinion:

- Written in typescript
- Focus on startup developments, components such as `Page`, PageBody`, `Error Modal`, `Error Modal with retry`, `
  Skeleton PlaceHolder`, `Header`, `HeaderUserMenu` make it much faster to build beautiful yet filled with your business
  logic.
- Do not pull thousands of other dependencies [(70% self)](https://bundlephobia.com/result?p=startify-ui)

### Improvements

- More focus on accessibility with WAI-ARIA guidelines specifications
- Remove react-tether as a dependency