import {TextAreaField, TextInputField, Vertical} from "../../../../src";
import * as React from "react";
import {StoriesDefaultThemeProvider} from "../../../utils/stories-container";

export default {
  title: "Molecules/Fields",
  component: TextInputField,
};

export const textInputField = () => (
    <StoriesDefaultThemeProvider>
      <Vertical>
        <TextInputField label={"First name"} star/>
        <TextInputField label={"Last name"}/>
        <TextInputField label={"First name"} error={"Please enter a first name"}/>
      </Vertical>
    </StoriesDefaultThemeProvider>
);

export const textAreaField = () => (
    <StoriesDefaultThemeProvider>
      <Vertical>
        <TextAreaField label={"Business description"} star/>
        <TextAreaField label={"Business description"}/>
        <TextAreaField label={"Business description"} error={"Please enter a business description"}/>
      </Vertical>
    </StoriesDefaultThemeProvider>
);
