import * as React from "react";
import {TabContent, Tabs, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
    title: "Molecules/Tabs(In Dev)",
    component: Tabs
};

export const tabs = () => (
    <StoriesDefaultThemeProvider>
        <Vertical>
            <Tabs>
                <TabContent label={"First Tab"}>
                    First Tab Content
                </TabContent>
                <TabContent label={"Second Tab"}>
                    Second Tab Content
                </TabContent>
            </Tabs>
        </Vertical>
    </StoriesDefaultThemeProvider>
);
