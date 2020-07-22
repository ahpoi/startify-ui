import * as React from "react";
import * as CSS from "csstype";

import styled from "styled-components";
import {calculateUnit} from "../..";

interface Props {
  height?: CSS.HeightProperty<any>;
  color?: CSS.ColorProperty
}

export const HorizontalDivider = styled.div<{ height: CSS.HeightProperty<any>, color: CSS.ColorProperty }>`
  border: none;
  height: ${(props) => calculateUnit(props.height ?? 1)};
  box-shadow: 0px 1px 0px ${(props) => props.color ?? "rgba(0, 0, 0, 0.1)"};
` as React.FunctionComponent<Props>;
