import { radius } from "./radius";
import { typography } from "./typography";
import { colors } from "./colors";
import { buttonTheme } from "../../components/atoms/button.theme";
import { badgeTheme } from "../../components/atoms/badge.theme";
import { alertTheme } from "../../components/molecules/alert.theme";
import { inputTheme } from "../../components/atoms/input.theme";
import { fieldErrorMessageTheme, fieldLabelTheme } from "../../components/molecules/fields/field-label.theme";

export const appTheme = {
  colors: colors,
  typography: typography,
  radius: radius,
  components: {
    alert: alertTheme,
    button: buttonTheme,
    badge: badgeTheme,
    input: inputTheme,
    fieldLabel: fieldLabelTheme,
    fieldErrorMessage: fieldErrorMessageTheme,
  },
};

export type AppTheme = typeof appTheme;
