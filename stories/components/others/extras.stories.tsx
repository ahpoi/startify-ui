import * as React from "react";
import {
    Chevron,
    Ellipsis,
} from "../../../src/components/others/extras";
import {Button, Horizontal} from "../../../src";

export default {
  title: "Others/Extras",
};

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
