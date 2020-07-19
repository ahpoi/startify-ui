import * as React from "react";
import * as CSS from "csstype";

import styled from "styled-components";
import {calculateUnit} from "../..";

interface Props {
  height?: CSS.HeightProperty<any>;
  color?: CSS.ColorProperty
}

export const HorizontalDivider = ({ height = "1px", color = "rgba(0, 0, 0, 0.1)" }: Props) =>
    <StyledDivider height={height} color={color}/>;

const StyledDivider = styled.div<{ height: any, color: any }>`
  border: none;
  height: ${(props) => calculateUnit(props.height)};
  box-shadow: 0px 1px 0px ${(props) => props.color};
`;
