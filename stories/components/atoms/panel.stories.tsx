import {Panel, CommonColors, Heading1, HorizontalDivider, Paragraph, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import * as React from "react";

export default {
  title: "Presentation|Panel",
  component: Panel
};

export const panel = () =>
    <StoriesDefaultThemeProvider>
      <Panel isResponsive mobile={{ seamless: true }}>
        <Vertical>
          <Heading1>
            Some Heading
          </Heading1>
          <HorizontalDivider/>
          <Vertical spacing={12}>
            <Paragraph>
              Some Content
            </Paragraph>
            <Paragraph>
              Some Content
            </Paragraph>
            <Paragraph>
              Some Content
            </Paragraph>
            <Paragraph>
              Some Content
            </Paragraph>
          </Vertical>
        </Vertical>
      </Panel>
    </StoriesDefaultThemeProvider>;

export const panelWithOverride = () =>
    <StoriesDefaultThemeProvider>
      <Panel backgroundColor={CommonColors.grey10} padding={48}>
        <Vertical>
          <Heading1>
            Some Heading
          </Heading1>
          <HorizontalDivider/>
          <Vertical spacing={12}>
            <Paragraph>
              Some Content
            </Paragraph>
            <Paragraph>
              Some Content
            </Paragraph>
            <Paragraph>
              Some Content
            </Paragraph>
            <Paragraph>
              Some Content
            </Paragraph>
          </Vertical>
        </Vertical>
      </Panel>
    </StoriesDefaultThemeProvider>;
