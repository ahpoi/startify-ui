import { radius } from "./radius";
import { typography } from "./typography";
import { colors } from "./colors";
import { buttonTheme } from "../../components/atoms/button.theme";
import { badgeTheme } from "../../components/atoms/badge.theme";

export const appTheme = {
  colors: colors,
  typography: typography,
  radius: radius,
  components: {
    button: buttonTheme,
    badge: badgeTheme,
  },
};

export type AppTheme = typeof appTheme;
