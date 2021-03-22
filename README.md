# Startify UI

Startify UI provides a set of reusable, and composable React components that make it super easy to create web
application. Jump [here](https://ahpoi.github.io/startify-ui) to see the components in action.

## Features

- Theamable 🚀
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
    <StartifyProvider rootId={"root"}>
        <HomeRoute/>
    </StartifyProvider>
    , document.getElementById("root")
);

```


## Theme Override

We have a default theme which can be found at the end of this document. However any properties can be overridden. 
Also we provide the concept of `colorScheme` where you can extend the color palette as per below we added the color `violet`. 
Then in our Button component we just pass the `colorScheme` property. 

```tsx

import React from 'react';
import ReactDOM from "react-dom";

const appTheme = {
    colors: {
        primary: {
            500: "xxxxx"
        },
        violet: {
            500: "xxxxx"
        }
    },
    radius: {
        xs: "6px",
        sm: "10px",
        md: "16px",
        lg: "20px"
    },
    components: {
        button: {
            variants: {
              solid: {
                color: "white",
                backgroundColor: "500",
                borderColor: "500",
                onHover: {
                  backgroundColor: "700",
                  borderColor: "700",
                  color: "white",
                },
              }
            }
        }
    }
}

ReactDOM.render(
    <StartifyProvider rootId={"root"} theme={appTheme}>
        <Button colorScheme={"violet"}/>
    </StartifyProvider>
    , document.getElementById("root")
);

```

### Why

- Written in typescript
- Focus on startup developments, components such
  as `Page, PageBody, TextInputField (Label, Error) Skeleton PlaceHolder` makes it
  much faster to build beautiful yet filled with your business logic.
- Do not pull thousands of other dependencies [(70% self)](https://bundlephobia.com/result?p=startify-ui)

### Upcoming Components

- Transitions
- Form Stepper
- Drag/Drop Upload

### Improvements

- More focus on accessibility with WAI-ARIA guidelines specifications
- Remove react-tether as a dependency
- More themeable properties (Spaces, Breakpoints...etc instead of constant)

## Default Theme

```javascript
const appTheme: AppTheme = {
    color: {
        primary: {
            50: "#E8EAF6",
            100: "#C5CAE9",
            200: "#9FA8DA",
            300: "#7986CB",
            400: "#5C6BC0",
            500: "#3F51B5",
            600: "#3949AB",
            700: "#303F9F",
            800: "#283593",
            900: "#1A237E",
        },
        secondary: {
            50: "#E0F2F1",
            100: "#B2DFDB",
            200: "#80CBC4",
            300: "#4DB6AC",
            400: "#26A69A",
            500: "#009688",
            600: "#00897B",
            700: "#00796B",
            800: "#00695C",
            900: "#004D40",
        },
        whiteAlpha: {
            50: "rgba(255, 255, 255, 0.04)",
            100: "rgba(255, 255, 255, 0.06)",
            200: "rgba(255, 255, 255, 0.08)",
            300: "rgba(255, 255, 255, 0.16)",
            400: "rgba(255, 255, 255, 0.24)",
            500: "rgba(255, 255, 255, 0.36)",
            600: "rgba(255, 255, 255, 0.48)",
            700: "rgba(255, 255, 255, 0.64)",
            800: "rgba(255, 255, 255, 0.80)",
            900: "rgba(255, 255, 255, 0.92)",
        },
        blackAlpha: {
            50: "rgba(0, 0, 0, 0.04)",
            100: "rgba(0, 0, 0, 0.06)",
            200: "rgba(0, 0, 0, 0.08)",
            300: "rgba(0, 0, 0, 0.16)",
            400: "rgba(0, 0, 0, 0.24)",
            500: "rgba(0, 0, 0, 0.36)",
            600: "rgba(0, 0, 0, 0.48)",
            700: "rgba(0, 0, 0, 0.64)",
            800: "rgba(0, 0, 0, 0.80)",
            900: "rgba(0, 0, 0, 0.92)",
        },
        grey: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
        },
        red: {
            50: "#FFF5F5",
            100: "#FED7D7",
            200: "#FEB2B2",
            300: "#FC8181",
            400: "#F56565",
            500: "#e53e3e",
            600: "#C53030",
            700: "#9B2C2C",
            800: "#822727",
            900: "#63171B",
        },
        blue: {
            50: "#f6fafd",
            100: "#e2eff9",
            200: "#cce4f5",
            300: "#b5d8f0",
            400: "#9bcaeb",
            500: "#7dbae5",
            600: "#5aa7de",
            700: "#2d8fd5",
            800: "#006fbe",
            900: "#004170",
        },
        yellow: {
            50: "#FFFFF0",
            100: "#FEFCBF",
            200: "#FAF089",
            300: "#F6E05E",
            400: "#ECC94B",
            500: "#D69E2E",
            600: "#B7791F",
            700: "#975A16",
            800: "#744210",
            900: "#5F370E",
        },
        green: {
            50: "#F0FFF4",
            100: "#C6F6D5",
            200: "#9AE6B4",
            300: "#68D391",
            400: "#48BB78",
            500: "#38A169",
            600: "#2F855A",
            700: "#276749",
            800: "#22543D",
            900: "#1C4532",
        },
    },
    typography: {
        fontFamily: {
            heading: "Helvetica,Arial,sans-serif",
            body: "Helvetica,Arial,sans-serif",
        },
        fontWeight: {
            light: 300,
            normal: 400,
            md: 500,
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
            heading: {
                1: {
                    web: "36px",
                    mobile: "28px",
                },
                2: {
                    web: "30px",
                    mobile: "24px",
                },
                3: {
                    web: "26px",
                    mobile: "20px",
                },
                4: {
                    web: "20px",
                    mobile: "16px",
                },
                5: {
                    web: "16px",
                    mobile: "14px",
                },
            },
            body: {
                xs: "10px",
                sm: "12px",
                md: "14px",
                lg: "16px",
            },
        },
    },
    radius: {
        xs: "3px",
        sm: "6px",
        md: "8px",
        lg: "12px"
    }
}
```