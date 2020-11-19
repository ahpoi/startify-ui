import {TextAreaField, TextInputField, Vertical} from "../../../src";
import * as React from "react";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
  title: "InputField",
  component: TextInputField
};

export const textInputFields = () => {
  return <StoriesDefaultThemeProvider>
    <Vertical>
      <TextInputField label={"First name"} star/>
      <TextInputField label={"Last name"} star/>
      <TextAreaField label={"Business description"}/>
    </Vertical>
  </StoriesDefaultThemeProvider>;
};

export const errorState = () => {
  return <StoriesDefaultThemeProvider>
    <Vertical>
      <TextInputField label={"First name"} error={"Please enter a first name"}/>
      <TextInputField label={"Last name"} error={"Please enter a last name"}/>
    </Vertical>
  </StoriesDefaultThemeProvider>;
};