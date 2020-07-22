import * as React from "react";
import * as CSS from "csstype";

import {CommonColors} from "../../styles/colors";

const defaultSize = 24;

export interface IconProps {
  color?: string;
  size?: number;
  onClick?: () => void;
  onHoverColor?: CSS.ColorProperty;
}

export const IconBackArrow = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
      <svg
          viewBox={`0 0 64 64`}
          width={size}
          height={size}
          style={{ fill: color }}>
        <path
            d="M54 30H14.101l15.278-14.552a2 2 0 10-2.759-2.897L9.172 29.171A3.978 3.978 0 008 32c0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552a1.999 1.999 0 001.38-3.448L14.038 34H54a2 2 0 000-4z"/>
      </svg>
  );
};
