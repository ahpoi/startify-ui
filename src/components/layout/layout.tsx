import * as React from "react";
import {BoxUnit, calculateUnit} from "./gls/box";
import {MaxWidths} from "../..";

export const ConditionalDisplay = (props: {
  when?: boolean;
  children: React.ReactNode;
}) => {
  return <>{props.when && props.children}</>;
};

/**
 * If you want a constrained max width layout
 */
export const MaxWidth = ({
                           maxWidth = MaxWidths.pageContent,
                           centered,
                           children,
                         }: {
  maxWidth?: BoxUnit;
  centered?: boolean;
  children?: React.ReactNode;
}) => (
    <div
        style={{
          maxWidth: calculateUnit(maxWidth),
          width: "100%",
          margin: centered ? "0 auto" : undefined,
        }}
        children={children}
    />
);


