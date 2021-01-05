import * as React from "react";
import { Tooltip } from "../../atoms/tooltip";

export type FieldProps = {
  label: string;
  star?: boolean;
  tooltip?: React.ReactElement<typeof Tooltip>;
} & ErrorFieldProps;

export type ErrorFieldProps = {
  error?: string | null;
};
