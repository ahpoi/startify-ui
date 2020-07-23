import * as React from "react";
import * as CSS from "csstype";

import styled from "styled-components";
import {calculateUnit} from "../..";
import {DivPrimitiveProps} from "../others/types";

interface HorizontalProps {
  height?: CSS.HeightProperty<any>;
  color?: CSS.ColorProperty
}

export const HorizontalDivider = styled.div<HorizontalProps>`
  border-bottom: ${({ height }) => calculateUnit(height ?? 1)} solid ${({ color }) => color ?? "#EFF2F7"}};
` as React.FunctionComponent<HorizontalProps & DivPrimitiveProps>;

interface VerticalProps {
  height?: CSS.HeightProperty<any>;
  width?: CSS.WidthProperty<any>;
  color?: CSS.ColorProperty
}

export const VerticalDivider = styled.div<VerticalProps>`
  border-left: ${(props) => calculateUnit(props.width ?? 1)} solid ${(props) => props.color ?? "#EFF2F7"};
  height: ${(props) => calculateUnit(props.height ?? "100%")};
` as React.FunctionComponent<VerticalProps & DivPrimitiveProps>;
