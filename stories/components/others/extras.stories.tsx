import * as React from "react";
import { StoriesDefaultThemeProvider, TestLogo } from "../../utils/stories-container";
import {
  BackButton,
  Chevron,
  Dot,
  DotColor,
  Ellipsis,
  HeaderLogo,
  PoweredBy,
  TextWithLink,
} from "../../../src/components/others/extras";
import { Button, Horizontal, VerticalSpacer } from "../../../src";

export default {
  title: "Others/Extras",
};

export const backButton = () => (
  <StoriesDefaultThemeProvider>
    <BackButton />
  </StoriesDefaultThemeProvider>
);

export const textWithLink = () => (
  <StoriesDefaultThemeProvider>
    <TextWithLink text={"Don't have an account? "} link={"Sign up"} onClick={() => 0} />
  </StoriesDefaultThemeProvider>
);

export const poweredBy = () => (
  <StoriesDefaultThemeProvider>
    <PoweredBy name={"Birdies"} url={"https://birdies.com"} fontSize={"12px"} logo={<TestLogo />} />
  </StoriesDefaultThemeProvider>
);

export const headerLogo = () => (
  <StoriesDefaultThemeProvider>
    <div>
      <HeaderLogo name={"Birdies"} color={"#FF5050"} fontWeight={500} onClick={() => 0} logo={<TestLogo />} />
    </div>
  </StoriesDefaultThemeProvider>
);

export const chevronAndEllipsis = () => {
  const [rotate, setOnRotate] = React.useState(false);
  return (
    <StoriesDefaultThemeProvider>
      <VerticalSpacer />
      <Horizontal verticalAlign={"center"}>
        <Button size={"sm"} onClick={() => setOnRotate(!rotate)}>
          Rotate
        </Button>
        <Ellipsis rotate={rotate} size={16} />
        <Chevron open={rotate} />
      </Horizontal>
    </StoriesDefaultThemeProvider>
  );
};

export const dot = () => (
  <StoriesDefaultThemeProvider>
    <Dot color={DotColor.Red} size={16} />
  </StoriesDefaultThemeProvider>
);
