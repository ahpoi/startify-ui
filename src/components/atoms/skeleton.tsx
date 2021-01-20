import * as React from "react";

import styled from "styled-components";
import { DivProps } from "../others/types";

//https://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html

export const Skeleton = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 100px;
  width: 100%;
  height: 16px;
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => props.theme.radius.xs};
  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
` as React.FunctionComponent<DivProps>;
