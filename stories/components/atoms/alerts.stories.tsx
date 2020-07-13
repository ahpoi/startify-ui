import * as React from "react";
import styled, {ThemeProvider} from "styled-components";
import {Alert, MainTheme} from "../../../src";

export default {
  title: "Presentation|Alert",
  component: Alert
};

export const alerts = () =>
    <ThemeProvider theme={MainTheme}>
      <Container>
        <Alert variant={"success"}>
          This is a success alert—check it out!
        </Alert>
        <Alert variant={"info"}>
          This is a info alert—check it out!
        </Alert>
        <Alert variant={"light"}>
          This is a light alert—check it out!
        </Alert>
        <Alert variant={"warning"}>
          This is a warning alert—check it out!
        </Alert>
        <Alert variant={"error"}>
          This is a danger alert—check it out!
        </Alert>
      </Container>
    </ThemeProvider>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &>*+* {
   margin-top: 16px
  };
`;
