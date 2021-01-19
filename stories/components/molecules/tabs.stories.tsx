import * as React from "react";
import {TabContent, Tabs, Vertical} from "../../../src";

export default {
    title: "Molecules/Tabs",
    component: Tabs
};

export const tabs = () => (
        <Vertical>
            <Tabs>
                <TabContent label={"Tab 1"}>
                    Content of Tab 1
                </TabContent>
                <TabContent label={"Tab 2"}>
                    Content of Tab 2
                </TabContent>
            </Tabs>
        </Vertical>
);
