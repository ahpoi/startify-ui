import * as React from "react";
import { Property } from "csstype";

import styled from "styled-components";
import { BoxUnit, calculateUnit, Horizontal } from "../..";
import { DivProps } from "../others/types";

interface PageSpinner {
  variant?: "circular" | "dots";
  color?: Property.Color;
  size?: BoxUnit;
  borderWidth?: BoxUnit;
}

/**
 * Full Page spinner
 */
export const PageSpinner = ({ variant = "dots", color, size, borderWidth }: PageSpinner) => (
  <StyledFullScreen>
    {variant === "circular" && <Spinner color={color} size={size} borderWidth={borderWidth} />}
    {variant === "dots" && <DotSpinner color={color} size={size} />}
  </StyledFullScreen>
);

const StyledFullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

interface SpinnerProps {
  color?: Property.Color;
  size?: BoxUnit;
  borderWidth?: BoxUnit;
}

export const Spinner = styled.div<SpinnerProps>`
  border-width: ${({ borderWidth }) => calculateUnit(borderWidth ?? 2)};
  width: ${({ size }) => calculateUnit(size ?? 24)};
  height: ${({ size }) => calculateUnit(size ?? 24)};
  color: ${(props) => props.color ?? props.theme.color.secondary};
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

type DotsSpinner = {
  color?: Property.Color;
  size?: BoxUnit;
};

export const DotSpinner = ({ color, size }: DotsSpinner) => (
  <Horizontal spacing={6}>
    <Dot color={color} size={size} animationDelay={"-0.32s"} />
    <Dot color={color} size={size} animationDelay={"-0.16s"} />
    <Dot color={color} size={size} animationDelay={"0s"} />
  </Horizontal>
);

/**
 * https://codepen.io/AnoNewb/pen/JwypRN
 */
const Dot = styled.div<DotsSpinner & { animationDelay: string }>`
  width: ${({ size }) => calculateUnit(size ?? 12)};
  height: ${({ size }) => calculateUnit(size ?? 12)};
  background-color: ${(props) => props.color ?? props.theme.color.secondary};

  border-radius: 100%;
  display: inline-block;

  animation: bouncedelay 1.4s infinite ease-in-out both;
  animation-delay: ${({ animationDelay }) => animationDelay};

  @keyframes bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
` as React.FunctionComponent<DotsSpinner & { animationDelay: string } & DivProps>;
