import {StoriesDefaultThemeProvider, TestLogo} from "../../utils/stories-container";
import * as React from "react";
import {
  Button, CommonColors, Footer,
  Header,
  HeaderLogo,
  Heading1,
  Horizontal,
  HorizontalDivider, LandingPageBody, LandingPageSection, MaxWidth,
  PageBody,
  PageRoot, Paragraph, SmallText,
  StretchSpacer,
  Vertical, VerticalSpacer
} from "../../../src";

export default {
  title: "Layout|Page Layout",
};

export const pageLayout = () =>
    <StoriesDefaultThemeProvider>
      <PageRoot>
        <Header>
          <HorizontalDivider/>
          <VerticalSpacer space={6}/>
          <MaxWidth centered>
            <Horizontal space={0}>
              <HeaderLogo name={"Birdies"} Logo={TestLogo} color={"#FF5050"} onClick={() => (9)}/>
              <StretchSpacer/>
              <Button variant={"textSecondary"} size={"small"}>Login</Button>
              <Button variant={"textSecondary"} size={"small"}>Sign up</Button>
            </Horizontal>
          </MaxWidth>
          <VerticalSpacer space={6}/>
          <HorizontalDivider/>
        </Header>
        <PageBody>
          <Heading1>Welcome to my Website</Heading1>
          <VerticalSpacer space={48}/>
          <Vertical space={12}>
            <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
            <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
            <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
            <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
            <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
            <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
          </Vertical>
        </PageBody>
        <HorizontalDivider/>
        <VerticalSpacer space={12}/>
        <Footer>
          <SmallText textAlign={"center"}>Build in Melbourne</SmallText>
        </Footer>
      </PageRoot>
    </StoriesDefaultThemeProvider>;

export const pageLandingLayout = () =>
    <StoriesDefaultThemeProvider>
      <PageRoot>
        <Header>
          <HorizontalDivider/>
          <VerticalSpacer space={6}/>
          <MaxWidth centered>
            <Horizontal space={0}>
              <HeaderLogo name={"Birdies"} Logo={TestLogo} color={"#FF5050"} onClick={() => (9)}/>
              <StretchSpacer/>
              <Button variant={"textSecondary"} size={"small"}>Login</Button>
              <Button variant={"textSecondary"} size={"small"}>Sign up</Button>
            </Horizontal>
          </MaxWidth>
          <VerticalSpacer space={6}/>
          <HorizontalDivider/>
        </Header>
        <LandingPageBody>
          <Vertical>
            <LandingPageSection>
              <Heading1>Welcome to my Landing PageWebsite</Heading1>
            </LandingPageSection>
            <LandingPageSection backgroundColor={CommonColors.grey30}>
              <VerticalSpacer/>
              <Vertical space={12}>
                <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
              </Vertical>
              <VerticalSpacer/>
            </LandingPageSection>
          </Vertical>
        </LandingPageBody>
        <Footer>
          <SmallText textAlign={"center"}>Build in Melbourne</SmallText>
        </Footer>
      </PageRoot>
    </StoriesDefaultThemeProvider>;
