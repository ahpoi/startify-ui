import { RadioGroupField, SelectField, TextAreaField, TextInputField, Vertical } from "../../../src";
import * as React from "react";
import { StoriesDefaultThemeProvider } from "../../utils/stories-container";

export default {
  title: "Molecules/InputField",
  component: TextInputField,
};

export const textInputField = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <TextInputField label={"First name"} star />
      <TextInputField label={"Last name"} />
      <TextInputField label={"First name"} error={"Please enter a first name"} />
    </Vertical>
  </StoriesDefaultThemeProvider>
);

const selectOptions = [
  { label: "Software Developer", value: "software-developer" },
  { label: "Quality Analyst", value: "quality-analyst" },
];

export const selectField = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <SelectField label={"Business categories"} options={selectOptions} star />
      <SelectField label={"Business categories"} options={selectOptions} />
      <SelectField
        label={"Business categories"}
        options={selectOptions}
        error={"Please enter a business description"}
      />
    </Vertical>
  </StoriesDefaultThemeProvider>
);

const radioOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export const radioGroupField = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <RadioGroupField label={"Do you want to enable this feature?"} star options={radioOptions} />
      <RadioGroupField label={"Do you want to enable this feature?"} options={radioOptions} />
      <RadioGroupField
        label={"Do you want to enable this feature?"}
        options={radioOptions}
        error={"Please select an option"}
      />
    </Vertical>
  </StoriesDefaultThemeProvider>
);

export const textAreaField = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <TextAreaField label={"Business description"} star />
      <TextAreaField label={"Business description"} />
      <TextAreaField label={"Business description"} error={"Please enter a business description"} />
    </Vertical>
  </StoriesDefaultThemeProvider>
);
