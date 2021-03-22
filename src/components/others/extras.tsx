import * as React from "react";
import { Property } from "csstype";
import { Horizontal } from "../layout/gls/gls";
import { IconChevronDown } from "./icons";

interface DotProps {
  color: Property.Color;
  size?: Property.FontSize<any>;
}

export const Dot = ({ size, color }: DotProps) => (
  <span
    style={{
      height: size ?? "12px",
      width: size ?? "12px",
      backgroundColor: color,
      borderRadius: "50%",
      display: "inline-block",
    }}
  />
);

export const Ellipsis = ({
  rotate = false,
  size = 4,
  color = "grey",
}: {
  rotate?: boolean;
  size?: number;
  color?: string;
}) => (
  <div
    style={{
      display: "block",
      transition: "transform 0.2s ease-out",
      transform: `${rotate ? "rotate(-90deg)" : "rotate(0deg)"}`,
    }}
  >
    <Horizontal spacing={4}>
      <Dot color={color} size={size} />
      <Dot color={color} size={size} />
      <Dot color={color} size={size} />
    </Horizontal>
  </div>
);

export const Chevron = ({
  open = false,
  size = 24,
  color = "grey",
}: {
  open?: boolean;
  size?: number;
  color?: string;
}) => (
  <div
    style={{
      display: "block",
      transition: "transform 0.2s ease-out",
      transform: `${open ? "rotate(-90deg)" : "rotate(0deg)"}`,
    }}
  >
    <IconChevronDown size={size} color={color} />
  </div>
);
