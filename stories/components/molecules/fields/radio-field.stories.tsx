import * as React from "react";
import {StoriesDefaultThemeProvider} from "../../../utils/stories-container";
import {RadioField, RadioFieldGroup} from "../../../../src/components/molecules/fields/radio-field";

export default {
  title: "Molecules/Fields",
  component: RadioField,
};

export const radioField = () => (
    <StoriesDefaultThemeProvider>
      <RadioFieldGroup label={"Are you an Australian citizen?"} star>
        <RadioField label={"Yes"} name={"isAustralianCitizen"} value={"yes"}/>
        <RadioField label={"No"} name={"isAustralianCitizen"} value={"no"}/>
      </RadioFieldGroup>
    </StoriesDefaultThemeProvider>
);
