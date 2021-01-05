import * as React from "react";
import {StoriesDefaultThemeProvider} from "../../../utils/stories-container";
import {RadioField, RadioFieldGroup} from "../../../../src/components/molecules/fields/radio-field";
import {Text, Tooltip} from "../../../../src";

export default {
  title: "Molecules/Fields/RadioField",
  component: RadioField,
};

export const radioField = () => (
    <StoriesDefaultThemeProvider>
      <RadioFieldGroup label={"Are you an Australian citizen?"} tooltip={<Tooltip>
          <Text>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </Text>
      </Tooltip>}>
        <RadioField label={"Yes"} name={"isAustralianCitizen"} value={"yes"}/>
        <RadioField label={"No"} name={"isAustralianCitizen"} value={"no"}/>
      </RadioFieldGroup>
    </StoriesDefaultThemeProvider>
);
