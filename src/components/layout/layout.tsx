import * as React from "react";

export type BoxUnit = number | string;

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
                           maxWidth,
                           centered,
                           children,
                         }: {
  maxWidth: BoxUnit;
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

export const calculateUnit = (value: BoxUnit): string => typeof value === "number" ? value.toString() + "px" : value;
