import * as React from "react";
import { TestLogo} from "../../utils/stories-container";
import {
    BackButton,
    Chevron,
    Dot,
    DotColor,
    Ellipsis,
    HeaderLogo,
    PoweredBy,
} from "../../../src/components/others/extras";
import {Button, Horizontal} from "../../../src";

export default {
  title: "Others/Extras",
};

export const backButton = () => (
    <BackButton />
);

export const poweredBy = () => (
    <PoweredBy name={"Birdies"} url={"https://birdies.com"} fontSize={"12px"} logo={<TestLogo />} />
);

export const headerLogo = () => (
    <div>
      <HeaderLogo name={"Birdies"} color={"#FF5050"} fontWeight={500} onClick={() => 0} logo={<TestLogo />} />
    </div>
);

export const chevronAndEllipsis = () => {
  const [rotate, setOnRotate] = React.useState(false);
  return (
      <Horizontal verticalAlign={"center"}>
        <Button size={"sm"} onClick={() => setOnRotate(!rotate)}>
          Rotate
        </Button>
        <Ellipsis rotate={rotate} size={16} />
        <Chevron open={rotate} />
      </Horizontal>
  );
};

export const dot = () => (
    <Dot color={DotColor.Red} size={16} />
);
