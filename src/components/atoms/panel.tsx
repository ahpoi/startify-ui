import * as React from "react";

import * as CSS from "csstype";
import styled, {css} from "styled-components";
import {Breakpoints, Spaces} from "../../styles/sizes";
import {calculateUnit} from "../../components/layout/gls/box";
import {CommonColors} from "../../styles/colors";

export interface PanelProps {
  backgroundColor?: CSS.ColorProperty,
  borderColor?: CSS.ColorProperty,
  padding?: CSS.PaddingProperty<any>,
  isResponsive?: boolean;
  mobile?: {
    seamless: boolean
    padding?: CSS.PaddingProperty<any>,
  }
}

/**
 * Allow Product to have a consistent radius, border, shadow throughout the application
 *
 */
export const Panel = styled.div<PanelProps>`
  background-color: ${(props) => props?.backgroundColor ?? CommonColors.white};
  border: 1px solid ${(props) => props?.borderColor ?? "#EBEBEB"};
  border-radius: ${({ theme }) => calculateUnit(theme.border.radiusMedium)};
  box-shadow:  ${({ theme }) => calculateUnit(theme.shadow.small)};
  padding: ${(props) => calculateUnit(props.padding ?? Spaces.large)};
  ${({ isResponsive = true }) => isResponsive && css`
     @media (max-width: ${Breakpoints.small}px) {
       padding: ${(props: PanelProps) => calculateUnit(props.mobile?.padding ?? Spaces.small)};
       ${props => props.mobile?.seamless && `
         border: none;
         box-shadow: none;
         padding: 0;
       `};
     }
  `}
` as React.FunctionComponent<PanelProps>;

