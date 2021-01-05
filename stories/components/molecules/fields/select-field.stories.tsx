import {SelectField, Text, Tooltip, Vertical} from "../../../../src";
import * as React from "react";
import {StoriesDefaultThemeProvider} from "../../../utils/stories-container";

export default {
  title: "Molecules/Fields/SelectField",
  component: SelectField,
};

const selectOptions = [
  { label: "Software Developer", value: "software-developer" },
  { label: "Quality Analyst", value: "quality-analyst" },
];

export const selectField = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <SelectField label={"Business categories"} options={selectOptions} star />
      <SelectField label={"Business categories"} options={selectOptions} tooltip={<Tooltip>
        <Text>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
        </Text>
      </Tooltip>}/>
      <SelectField
        label={"Business categories"}
        options={selectOptions}
        error={"Please enter a business description"}
      />
    </Vertical>
  </StoriesDefaultThemeProvider>
);
