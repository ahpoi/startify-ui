import * as React from "react";
import styled, {ThemeProvider} from "styled-components";
import {Badge, DefaultAppTheme} from "../../../src";

export default {
  title: "Presentation|Badge",
  component: Badge
};

export const badge = () =>
    <ThemeProvider theme={DefaultAppTheme}>
      <Container>
        <div>
          <Badge variant={"success"}>
            SUCCESS
          </Badge>
        </div>
      </Container>
    </ThemeProvider>;

export const variants = () =>
    <ThemeProvider theme={DefaultAppTheme}>
      <Container>
        <div>
          <Badge variant={"primary"}>
            PRIMARY
          </Badge>
        </div>
        <div>
          <Badge variant={"secondary"}>
            SECONDARY
          </Badge>
        </div>
        <div>
          <Badge variant={"success"}>
            SUCCESS
          </Badge>
        </div>
        <div>
          <Badge variant={"info"}>
            INFO
          </Badge>
        </div>
        <div>
          <Badge variant={"warning"}>
            WARNING
          </Badge>
        </div>
        <div>
          <Badge variant={"error"}>
            ERROR
          </Badge>
        </div>
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
