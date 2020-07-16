import * as React from "react";

import {TextInputField} from "../../../src";
import {withKnobs, boolean} from "@storybook/addon-knobs";

import {StoriesDefaultThemeProvider, StoriesVerticalContainer} from "../../utils/stories-container";

export default {
  title: "Inputs|TextInputField",
  component: TextInputField,
  decorators: [withKnobs],
};

export const textInputField = () => {
  const toggleDisableKnob = boolean("Toggle Disabled", false);
  const toggleStar = boolean("Required field", false);
  return <StoriesDefaultThemeProvider>
    <StoriesVerticalContainer>
      <TextInputField id={"first-name"}
                      label={"First name"}
                      star={toggleStar}
                      disabled={toggleDisableKnob}/>
    </StoriesVerticalContainer>
  </StoriesDefaultThemeProvider>;
};

export const invalidField = () => {
  return <StoriesDefaultThemeProvider>
    <StoriesVerticalContainer>
      <TextInputField id={"email"}
                      label={"Email"}
                      error={"Please enter a valid email address"}/>
    </StoriesVerticalContainer>
  </StoriesDefaultThemeProvider>;
};
