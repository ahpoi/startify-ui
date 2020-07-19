import * as React from "react";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import {Dot, DotColor, Ellipsis} from "../../../src/components/others/dot";
import {withKnobs} from "@storybook/addon-knobs";

export default {
  title: "Others|Dots",
  component: Ellipsis,
  decorators: [withKnobs],
};

export const ellipsis = () => {
  return <StoriesDefaultThemeProvider>
    <Ellipsis size={16}/>
  </StoriesDefaultThemeProvider>;
};

export const dot = () =>
    <StoriesDefaultThemeProvider>
      <Dot color={DotColor.Red} size={16}/>
    </StoriesDefaultThemeProvider>;


