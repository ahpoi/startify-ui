import * as React from "react";

import {CommonColors} from "../../styles/colors";
import styled from "styled-components";

const defaultSize = 24;

export interface IconProps {
  color?: string;
  size?: number;
  onClick?: () => void;
}

export const IconBackArrow = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <StyledSvg
          viewBox={`0 0 64 64`}
          width={size}
          height={size}
          style={{ fill: color }}
          onClick={props.onClick}
      >
        <path
            d="M54 30H14.101l15.278-14.552a2 2 0 10-2.759-2.897L9.172 29.171A3.978 3.978 0 008 32c0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552a1.999 1.999 0 001.38-3.448L14.038 34H54a2 2 0 000-4z"/>
      </StyledSvg>
  );
};

export const IconClose = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <StyledSvg width={size}
                 height={size}
                 viewBox="0 0 22 18"
                 onClick={props.onClick}>
        <path
            d="M11.894 10.834l4.773-4.773L15.607 5l-4.773 4.773L6.06 5 5 6.06l4.773 4.774L5 15.607l1.06 1.06 4.774-4.773 4.773 4.773 1.06-1.06-4.773-4.773z"
            fill={color}/>
      </StyledSvg>
  );
};

interface StyledSvgProps {
  onClick?: () => void;
}

export const StyledSvg = styled.svg<StyledSvgProps>`
  ${({ onClick }) => onClick && `
      cursor: pointer;
      &:hover {
         filter: brightness(60%)
      } 
  `};
`;
