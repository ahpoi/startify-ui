import { radius } from "./radius";
import { typography } from "./typography";
import { colors } from "./colors";

export const appTheme = {
  colors: colors,
  typography: typography,
  radius: radius,
};

export type AppTheme = typeof appTheme;
