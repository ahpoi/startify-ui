import * as React from "react";
import {TabContent, Tabs, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
    title: "Molecules/Tabs",
    component: Tabs
};

export const tabs = () => (
    <StoriesDefaultThemeProvider>
        <Vertical>
            <Tabs>
                <TabContent label={"Tab 1"}>
                    Content of Tab 1
                </TabContent>
                <TabContent label={"Tab 2"}>
                    Content of Tab 2
                </TabContent>
                <div>

                </div>
            </Tabs>
        </Vertical>
    </StoriesDefaultThemeProvider>
);
