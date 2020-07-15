import {InputField} from "../../../src/components/atoms/input";
import styled, {ThemeProvider} from "styled-components";
import {DefaultAppTheme} from "../../../src";
import {withKnobs, boolean} from "@storybook/addon-knobs";

import * as React from "react";

export default {
  title: "Inputs|InputField",
  component: InputField,
  decorators: [withKnobs],
};


export const inputField = () => {
  const toggleErrorKnob = boolean("Toggle Error", false);
  const toggleDisableKnob = boolean("Toggle Disabled", false);
  return <ThemeProvider theme={DefaultAppTheme}>
    <Container>
      <InputField id={"first-name"}
                  label={"First name"}
                  star
                  isInvalid={toggleErrorKnob}
                  disabled={toggleDisableKnob}/>
      <InputField id={"last-name"} label={"Last name"}
                  star
                  isInvalid={toggleErrorKnob}
                  disabled={toggleDisableKnob}/>
      <InputField id={"mobile"}
                  label={"Mobile"}
                  isInvalid={toggleErrorKnob}
                  disabled={toggleDisableKnob}/>
      <InputField id={"email"}
                  label={"Email"}
                  isInvalid={true}
                  error={"Please enter a valid email address"}/>
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
