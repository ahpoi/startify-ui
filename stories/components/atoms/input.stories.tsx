import {Input} from "../../../src/components/atoms/input";
import styled, {ThemeProvider} from "styled-components";
import {DefaultAppTheme} from "../../../src";
import {withKnobs, boolean} from "@storybook/addon-knobs";

import * as React from "react";

export default {
  title: "Inputs|Input",
  component: Input,
  decorators: [withKnobs],
};


export const input = () => {
  const toggleErrorKnob = boolean("Toggle Error", false);
  const toggleDisableKnob = boolean("Toggle Disabled", false);
  return <ThemeProvider theme={DefaultAppTheme}>
    <Container>
      <Input isInvalid={toggleErrorKnob} disabled={toggleDisableKnob} placeholder="Enter something..."/>
    </Container>
  </ThemeProvider>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &>*+* {
   margin-top: 16px
  };
`;
