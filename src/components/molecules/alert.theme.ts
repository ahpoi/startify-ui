import { radius } from "../../theme/styles/radius";

export type AlertTheme = {
  base: AlertThemeBase;
  border: {
    width: string;
    radius: string;
    color: string;
  };
};

export type AlertThemeBase = {
  color: string;
  fontSize: string;
  backgroundColor: string;
};

export const alertTheme: AlertTheme = {
  base: {
    color: "700",
    backgroundColor: "50",
    fontSize: "14px",
  },
  border: {
    color: "300",
    radius: radius.xs,
    width: "1px",
  },
};
