import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import * as React from "react";
import {PageSpinner, Spinner} from "../../../src/components/atoms/spinner";

export default {
  title: "Presentation|Spinner",
  component: Spinner
};

export const spinner = () =>
    <StoriesDefaultThemeProvider>
      <Spinner/>
    </StoriesDefaultThemeProvider>;

export const fullPageSpinner = () =>
    <StoriesDefaultThemeProvider>
      <PageSpinner/>
    </StoriesDefaultThemeProvider>;
