import * as React from "react";
import styled, {ThemeProvider} from "styled-components";
import {Alert, DefaultAppTheme} from "../../../src";

export default {
  title: "Presentation|Alert",
  component: Alert
};

export const alert = () =>
    <ThemeProvider theme={DefaultAppTheme}>
      <Container>
        <Alert variant={"success"}>
          This is a success alert—check it out!
        </Alert>
      </Container>
    </ThemeProvider>;

export const variants = () =>
    <ThemeProvider theme={DefaultAppTheme}>
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
        <Alert customStyle={{ backgroundColor: "blue", borderColor: "red", color: "white" }}>
          This is a custom alert—check it out!
        </Alert>
      </Container>
    </ThemeProvider>;

export const close = () =>
    <ThemeProvider theme={DefaultAppTheme}>
      <Container>
        <Alert variant={"success"} onClose={() => console.log("clicked")}>
          This is a success alert—check it out!
        </Alert>
        <Alert variant={"info"} onClose={() => (0)}>
          This is a info alert—check it out!
        </Alert>
        <Alert variant={"light"} onClose={() => (0)}>
          This is a light alert—check it out!
        </Alert>
        <Alert variant={"warning"} onClose={() => (0)}>
          This is a warning alert—check it out!
        </Alert>
        <Alert variant={"error"} onClose={() => (0)}>
          This is a danger alert—check it out!
        </Alert>
        <Alert customStyle={{ backgroundColor: "blue", borderColor: "red", color: "white" }} onClose={() => (0)}>
          This is a custom alert—check it out!
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
