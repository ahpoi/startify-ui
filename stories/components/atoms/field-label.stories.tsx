import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import * as React from "react";
import {FieldErrorMessage, FieldLabel, Vertical} from "../../../src";

export default {
  title: "Inputs|FieldLabel",
  component: FieldLabel
};

export const fieldLabel = () => (
    <StoriesDefaultThemeProvider>
      <Vertical>
        <FieldLabel>First name</FieldLabel>
        <FieldLabel star>Last name</FieldLabel>
      </Vertical>
    </StoriesDefaultThemeProvider>
);

export const fieldLabelWithInputSample = () => (
    <StoriesDefaultThemeProvider>
      <div>
        <FieldLabel>First name</FieldLabel>
        <FieldWrapperDivider/>
      </div>
    </StoriesDefaultThemeProvider>
);

export const fieldLabelWithInputErrorSample = () => (
    <StoriesDefaultThemeProvider>
      <div>
        <FieldLabel>First name</FieldLabel>
        <FieldWrapperDivider/>
        <FieldErrorMessage>Please enter a first name</FieldErrorMessage>
      </div>
    </StoriesDefaultThemeProvider>
);

const FieldWrapperDivider = () => <div style={{ marginTop: "6px" }}/>;
