import * as React from "react";

import * as CSS from "csstype";
import {Horizontal} from "../layout/gls/gls";


interface DotProps {
  color: CSS.ColorProperty,
  size?: CSS.FontSizeProperty<any>
}

/**
 * From Google https://careers.google.com/jobs/
 */
export const DotColor = {
  Red: "#ea4335",
  Blue: "#0052CC",
  Green: "#34a853",
  Yellow: "#fbbc05",
  Grey: "grey",
};

export const Dot = ({ size, color }: DotProps) => <span style={{
  height: size ?? "12px",
  width: size ?? "12px",
  backgroundColor: color,
  borderRadius: "50%",
  display: "inline-block",
}}/>;

export const Ellipsis = ({ rotate = false, size = 4 }: { rotate?: boolean, size?: number }) => <div
    style={{
      display: "inline-block",
      transition: "transform 0.2s ease-out",
      transform: `${rotate ? "rotate(90deg)" : "rotate(0deg)"}`
    }}>
  <Horizontal space={4}>
    <Dot color={"grey"} size={size}/>
    <Dot color={"grey"} size={size}/>
    <Dot color={"grey"} size={size}/>
  </Horizontal>
</div>;


