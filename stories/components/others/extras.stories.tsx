import * as React from "react";
import {StoriesDefaultThemeProvider, TestLogo} from "../../utils/stories-container";
import {
  BackButton,
  Dot,
  DotColor,
  Ellipsis,
  HeaderLogo,
  PoweredBy,
  TextWithLink
} from "../../../src/components/others/extras";

export default {
  title: "Others|Extras",
};

export const backButton = () =>
    <StoriesDefaultThemeProvider>
      <BackButton/>
    </StoriesDefaultThemeProvider>;

export const textWithLink = () =>
    <StoriesDefaultThemeProvider>
      <TextWithLink text={"Don't have an account? "} link={"Sign up"} onClick={() => (0)}/>
    </StoriesDefaultThemeProvider>;

export const poweredBy = () => <StoriesDefaultThemeProvider>
  <PoweredBy
      name={"Birdies"}
      url={"https://birdies.com"}
      fontSize={"12px"}
      Logo={TestLogo}
  />
</StoriesDefaultThemeProvider>;

export const headerLogo = () => <StoriesDefaultThemeProvider>
  <div>
    <HeaderLogo
        name={"Birdies"}
        color={"#FF5050"}
        fontWeight={500}
        onClick={() => (0)}
        Logo={TestLogo}
    />
  </div>
</StoriesDefaultThemeProvider>;

export const ellipsis = () =>
    <StoriesDefaultThemeProvider>
      <Ellipsis size={16}/>
    </StoriesDefaultThemeProvider>;

export const dot = () =>
    <StoriesDefaultThemeProvider>
      <Dot color={DotColor.Red} size={16}/>
    </StoriesDefaultThemeProvider>;
