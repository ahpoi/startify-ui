import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import * as React from "react";
import {DotSpinner, PageSpinner, Spinner} from "../../../src/components/atoms/spinner";

export default {
  title: "Spinner",
  component: Spinner
};

export const spinner = () =>
    <StoriesDefaultThemeProvider>
      <Spinner/>
    </StoriesDefaultThemeProvider>;

export const dotSpinner = () =>
    <StoriesDefaultThemeProvider>
      <DotSpinner/>
    </StoriesDefaultThemeProvider>;

export const fullPageSpinner = () =>
    <StoriesDefaultThemeProvider>
      <PageSpinner variant={"circular"}/>
    </StoriesDefaultThemeProvider>;

export const fullPageDotsSpinner = () =>
    <StoriesDefaultThemeProvider>
      <PageSpinner variant={"dots"}/>
    </StoriesDefaultThemeProvider>;

