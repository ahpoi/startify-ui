import { TestDesktopHeader} from "../../utils/stories-container";
import * as React from "react";
import {
  Footer,
  Heading1,
  HorizontalDivider,
  LandingPageBody,
  LandingPageSection,
  PageBody,
  PageRoot,
  Paragraph,
  SmallText,
  Vertical,
  VerticalSpacer,
} from "../../../src";

export default {
  title: "Layout/Page Layout",
};

export const pageLayout = () => (

    <PageRoot>
      <TestDesktopHeader />
      <PageBody>
        <Heading1>Welcome to my Website</Heading1>
        <VerticalSpacer spacing={48} />
        <Vertical spacing={12}>
          <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
          <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
          <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
          <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
          <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
          <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
        </Vertical>
      </PageBody>
      <HorizontalDivider />
      <Footer>
        <VerticalSpacer spacing={12} />
        <SmallText textAlign={"center"}>Build in Melbourne</SmallText>
        <VerticalSpacer spacing={12} />
      </Footer>
    </PageRoot>

);
export const pageLandingLayout = () => (
    <PageRoot>
      <TestDesktopHeader />
      <VerticalSpacer spacing={48} />
      <LandingPageBody>
        <Vertical>
          <LandingPageSection>
            <Heading1>Welcome to my Landing PageWebsite</Heading1>
          </LandingPageSection>
          <LandingPageSection verticalPadding={24}>
            <Vertical spacing={12}>
              <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
              <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
              <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
              <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
              <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
              <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
            </Vertical>
          </LandingPageSection>
        </Vertical>
      </LandingPageBody>
      <Footer>
        <SmallText textAlign={"center"}>Build in Melbourne</SmallText>
      </Footer>
    </PageRoot>
);
