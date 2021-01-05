import {TextAreaField, TextInputField, Tooltip, Vertical, Text} from "../../../../src";
import * as React from "react";
import {StoriesDefaultThemeProvider} from "../../../utils/stories-container";

export default {
    title: "Molecules/Fields/TextInputField",
    component: TextInputField,
};

export const textInputField = () => (
    <StoriesDefaultThemeProvider>
        <Vertical>
            <TextInputField label={"First name"} star/>
            <TextInputField label={"Last name"} tooltip={<Tooltip>
                <Text>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Text>
            </Tooltip>}/>
            <TextInputField label={"First name"} error={"Please enter a first name"}/>
        </Vertical>
    </StoriesDefaultThemeProvider>
);

export const textAreaField = () => (
    <StoriesDefaultThemeProvider>
        <Vertical>
            <TextAreaField label={"Business description"} star/>
            <TextAreaField label={"Business description"} tooltip={<Tooltip>
                <Text>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </Text>
            </Tooltip>}/>
            <TextAreaField label={"Business description"} error={"Please enter a business description"}/>
        </Vertical>
    </StoriesDefaultThemeProvider>
);
