import * as React from "react";

import {CommonColors} from "../../styles/colors";
import styled from "styled-components";

const defaultSize = 24;

export interface IconProps {
  color?: string;
  size?: number;
}

export const IconBackArrow = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg
          viewBox={`0 0 64 64`}
          width={size}
          height={size}
          style={{ fill: color }}
      >
        <path
            d="M54 30H14.101l15.278-14.552a2 2 0 10-2.759-2.897L9.172 29.171A3.978 3.978 0 008 32c0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552a1.999 1.999 0 001.38-3.448L14.038 34H54a2 2 0 000-4z"/>
      </svg>
  );
};

export const IconClose = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg width={size}
                 height={size}
                 viewBox="0 0 22 18">
        <path
            d="M11.894 10.834l4.773-4.773L15.607 5l-4.773 4.773L6.06 5 5 6.06l4.773 4.774L5 15.607l1.06 1.06 4.774-4.773 4.773 4.773 1.06-1.06-4.773-4.773z"
            fill={color}/>
      </svg>
  );
};

export const IconError = (props: IconProps) => {
  const color = props.color || "ca3332";
  const size = props.size || defaultSize;
  return (
      <svg
          viewBox={`0 0 450 450`}
          width={size}
          height={size}
          style={{ fill: color }}
      >
        <path
            d="M446.324 367.381L262.857 41.692c-15.644-28.444-58.311-28.444-73.956 0L5.435 367.381c-15.644 28.444 4.267 64 36.978 64h365.511c34.133-1.422 54.044-35.556 38.4-64z"
            fill={color}
        />
        <path
            d="M225.879 63.025l183.467 325.689H42.413L225.879 63.025z"
            fill="#fff"
        />
        <g fill="#3f4448">
          <path d="M196.013 212.359l11.378 75.378c1.422 8.533 8.533 15.644 18.489 15.644 8.533 0 17.067-7.111 18.489-15.644l11.378-75.378c2.844-18.489-11.378-34.133-29.867-34.133-18.49-.001-31.29 15.644-29.867 34.133z" />
          <circle cx={225.879} cy={336.092} r={17.067} />
        </g>
      </svg>
  );
};

/**
 * Provides border around icons for accesability
 */
export const IconButtonContainer = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: inline-block;
  &:focus,
  &:hover,
  &:active {
    outline: 1px dashed grey;
  }  
`
