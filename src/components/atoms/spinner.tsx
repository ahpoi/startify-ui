import * as React from "react";
import * as CSS from "csstype";

import styled from "styled-components";
import {BoxUnit, calculateUnit} from "../..";

interface SpinnerProps {
  color?: CSS.ColorProperty
  size?: BoxUnit
  borderWidth?: BoxUnit
}

/**
 * Full Page spinner
 */
export const PageSpinner = (props: SpinnerProps) => <StyledFullScreen>
  <Spinner {...props}/>
</StyledFullScreen>;

const StyledFullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Spinner = styled.div<SpinnerProps>`
  border-width: ${({ borderWidth }) => calculateUnit(borderWidth ?? 2)};
  width: ${({ size }) => calculateUnit(size ?? 24)};
  height: ${({ size }) => calculateUnit(size ?? 24)};
  color:  ${(props) => props.color ?? props.theme.color.secondary};
  display: inline-block;
  background: transparent;
  border-style: solid;
  border-top-color: currentColor;
  border-left-color: currentColor;
  border-right-color: currentColor;
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: rotation 1.5s linear infinite;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
` as React.FunctionComponent<SpinnerProps>;
