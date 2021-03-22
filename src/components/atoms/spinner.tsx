import * as React from "react";

import styled from "styled-components";
import { BoxUnit, calculateUnit, ColorScheme, Horizontal } from "../..";
import { DivProps } from "../others/types";
import { useColorScheme } from "../../theme/styles/hooks";

interface PageSpinner {
  variant?: "circular" | "dots";
  colorScheme?: ColorScheme;
  size?: BoxUnit;
  borderWidth?: BoxUnit;
}

/**
 * Full Page spinner
 */
export const PageSpinner = ({ variant = "dots", colorScheme = "secondary", size, borderWidth }: PageSpinner) => (
  <StyledFullScreen>
    {variant === "circular" && <SpinnerCircular colorScheme={colorScheme} size={size} borderWidth={borderWidth} />}
    {variant === "dots" && <SpinnerDots colorScheme={colorScheme} size={size} />}
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
  colorScheme?: ColorScheme;
  size?: BoxUnit;
  borderWidth?: BoxUnit;
}

export const SpinnerCircular = styled.div<SpinnerProps>`
  border-width: ${({ theme, borderWidth }) =>
    calculateUnit(borderWidth ?? theme.components.spinner.circular.borderWith)};
  width: ${({ theme, size }) => calculateUnit(size ?? theme.components.spinner.circular.size)};
  height: ${({ theme, size }) => calculateUnit(size ?? theme.components.spinner.circular.size)};
  color: ${({ theme, colorScheme }) =>
    useColorScheme(theme.components.spinner.base.color, colorScheme ?? theme.components.spinner.default.colorScheme)};
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

type SpinnerDotsProps = {
  colorScheme?: ColorScheme;
  size?: BoxUnit;
};

export const SpinnerDots = ({ colorScheme, size }: SpinnerDotsProps) => (
  <Horizontal spacing={6}>
    <Dot colorScheme={colorScheme} size={size} animationDelay={"-0.32s"} />
    <Dot colorScheme={colorScheme} size={size} animationDelay={"-0.16s"} />
    <Dot colorScheme={colorScheme} size={size} animationDelay={"0s"} />
  </Horizontal>
);

/**
 * https://codepen.io/AnoNewb/pen/JwypRN
 */
const Dot = styled.div<SpinnerDotsProps & { animationDelay: string }>`
  width: ${({ theme, size }) => size ?? theme.components.spinner.dots.size};
  height: ${({ theme, size }) => size ?? theme.components.spinner.dots.size};
  background-color: ${({ theme, colorScheme }) =>
    useColorScheme(theme.components.spinner.base.color, colorScheme ?? theme.components.spinner.default.colorScheme)};
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
` as React.FunctionComponent<SpinnerDotsProps & { animationDelay: string } & DivProps>;
