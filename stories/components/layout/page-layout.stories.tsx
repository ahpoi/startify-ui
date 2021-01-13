import { StoriesDefaultThemeProvider, TestDesktopHeader, TestLogo } from "../../utils/stories-container";
import * as React from "react";
import {
  Button,
  Footer,
  Header,
  HeaderLogo,
  Heading1,
  Horizontal,
  HorizontalDivider,
  LandingPageBody,
  LandingPageSection,
  MaxWidth,
  PageBody,
  PageRoot,
  Paragraph,
  SmallText,
  StretchSpacer,
  Vertical,
  VerticalSpacer,
} from "../../../src";

export default {
  title: "Layout/Page Layout",
};

export const pageLayout = () => (
  <StoriesDefaultThemeProvider>
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
  </StoriesDefaultThemeProvider>
);
export const pageLandingLayout = () => (
  <StoriesDefaultThemeProvider>
    <PageRoot>
      <Header>
        <HorizontalDivider />
        <VerticalSpacer spacing={6} />
        <MaxWidth centered>
          <Horizontal spacing={0}>
            <HeaderLogo name={"Birdies"} logo={<TestLogo/>} color={"#FF5050"} onClick={() => 9} />
            <StretchSpacer />
            <Button variant={"linkSecondary"} size={"sm"}>
              Login
            </Button>
            <Button variant={"linkSecondary"} size={"sm"}>
              Sign up
            </Button>
          </Horizontal>
        </MaxWidth>
        <VerticalSpacer spacing={6} />
        <HorizontalDivider />
      </Header>
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
  </StoriesDefaultThemeProvider>
);
