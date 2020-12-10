import * as React from "react";
import {Property} from "csstype";

import styled from "styled-components";
import {calculateUnit} from "../..";
import {DivProps} from "../others/types";

interface HorizontalProps {
  height?: Property.Height<any>;
  color?: Property.Color
}

export const HorizontalDivider = styled.div<HorizontalProps>`
  border-bottom: ${({ height }) => calculateUnit(height ?? 1)} solid ${({ color }) => color ?? "#EFF2F7"}};
` as React.FunctionComponent<HorizontalProps & DivProps>;

interface VerticalProps {
  height?: Property.Height<any>;
  width?: Property.Width<any>;
  color?: Property.Color
}

export const VerticalDivider = styled.div<VerticalProps>`
  border-left: ${(props) => calculateUnit(props.width ?? 1)} solid ${(props) => props.color ?? "#EFF2F7"};
  height: ${(props) => calculateUnit(props.height ?? "100%")};
` as React.FunctionComponent<VerticalProps & DivProps>;
