import * as React from "react";
import { Property } from "csstype";

import styled from "styled-components";
import { calculateUnit } from "../..";
import { DivProps } from "../others/types";

interface HorizontalProps {
  size?: Property.Height<any>;
  color?: Property.Color;
}

export const HorizontalDivider = styled.div<HorizontalProps>`
  border-bottom: ${({ theme, size }) => size ?? theme.components.divider.size} solid ${({ theme, color }) =>
  color ?? theme.components.divider.color}};
` as React.FunctionComponent<HorizontalProps & DivProps>;

interface VerticalProps {
  height?: Property.Height<any>;
  width?: Property.Width<any>;
  color?: Property.Color;
}

export const VerticalDivider = styled.div<VerticalProps>`
  border-left: ${({ theme, width }) => width ?? theme.components.divider.size} solid ${({ theme, color }) =>
  color ?? theme.components.divider.color}};
  height: ${(props) => calculateUnit(props.height ?? "100%")};
` as React.FunctionComponent<VerticalProps & DivProps>;
