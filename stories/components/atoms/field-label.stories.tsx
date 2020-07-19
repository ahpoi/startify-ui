import {StoriesDefaultThemeProvider, StoriesVerticalContainer} from "../../utils/stories-container";
import * as React from "react";
import {FieldErrorMessage, FieldLabel} from "../../../src";

export default {
  title: "Inputs|FieldLabel",
  component: FieldLabel
};

export const fieldLabel = () => (
    <StoriesDefaultThemeProvider>
      <StoriesVerticalContainer>
        <FieldLabel>First name</FieldLabel>
        <FieldLabel star>Last name</FieldLabel>
      </StoriesVerticalContainer>
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
        <FieldWrapperDivider/>
        <FieldErrorMessage>Please enter a first name</FieldErrorMessage>
      </div>
    </StoriesDefaultThemeProvider>
);

const FieldWrapperDivider = () => <div style={{ marginTop: "6px" }}/>;
