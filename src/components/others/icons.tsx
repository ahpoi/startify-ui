import * as React from "react";

import {CommonColors} from "../../styles/colors";
import styled from "styled-components";

const defaultSize = 24;

export interface IconProps {
  color?: string;
  size?: number;
}

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
          <path
              d="M196.013 212.359l11.378 75.378c1.422 8.533 8.533 15.644 18.489 15.644 8.533 0 17.067-7.111 18.489-15.644l11.378-75.378c2.844-18.489-11.378-34.133-29.867-34.133-18.49-.001-31.29 15.644-29.867 34.133z"/>
          <circle cx={225.879} cy={336.092} r={17.067}/>
        </g>
      </svg>
  );
};

/**
 * https://www.flaticon.com/packs/navigation-5
 */
export const IconChevronRight = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg width={size}
           height={size}
           viewBox="0 0 256 256"
           style={{ fill: color }}>
        <path d="M79.093 0L48.907 30.187 146.72 128l-97.813 97.813L79.093 256l128-128z"/>
      </svg>
  );
};

export const IconChevronLeft = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg width={size}
           height={size}
           viewBox="0 0 256 256"
           style={{ fill: color }}>
        <path d="M128 48.907l-128 128 30.187 30.186L128 109.28l97.813 97.813L256 176.907z"/>
      </svg>
  );
};

export const IconChevronUp = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg width={size}
           height={size}
           viewBox="0 0 256 256"
           style={{ fill: color }}>
        <path d="M207.093 30.187L176.907 0l-128 128 128 128 30.186-30.187L109.28 128z"/>
      </svg>
  );
};

export const IconChevronDown = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg width={size}
           height={size}
           viewBox="0 0 256 256"
           style={{ fill: color }}>
        <path d="M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z"/>
      </svg>
  );
};

export const IconBackArrow = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg
          viewBox={`0 0 341 341`}
          width={size}
          height={size}
          style={{ fill: color }}
      >
        <path
            d="M341.333 149.333H81.707L200.853 30.187 170.667 0 0 170.667l170.667 170.666 30.186-30.186L81.707 192h259.626z"/>
      </svg>
  );
};

export const IconNextArrow = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg
          viewBox={`0 0 341 341`}
          width={size}
          height={size}
          style={{ fill: color }}
      >
        <path d="M170.667 0L140.48 30.187l119.147 119.146H0V192h259.627L140.48 311.147l30.187 30.186 170.666-170.666z"/>
      </svg>
  );
};

export const IconMenu = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg
          viewBox={`0 0 384 384`}
          width={size}
          height={size}
          style={{ fill: color }}
      >
        <path d="M0 277.333h384V320H0zM0 170.667h384v42.667H0zM0 64h384v42.667H0z"/>
      </svg>
  );
};

export const IconUser = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg
          viewBox={`0 0 512 512`}
          width={size}
          height={size}
          style={{ fill: color }}
      >
        <path d="M255.999 0c-74.443 0-135 60.557-135 135s60.557 135 135 135 135-60.557 135-135-60.557-135-135-135zM478.48 398.68C438.124 338.138 370.579 302 297.835 302h-83.672c-72.744 0-140.288 36.138-180.644 96.68l-2.52 3.779V512H481V402.459l-2.52-3.779z" />
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
` as React.FunctionComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
