import { radius } from "./radius";
import { typography } from "../../components/atoms/typography.theme";
import { colors } from "./colors";
import { buttonTheme } from "../../components/atoms/button.theme";
import { badgeTheme } from "../../components/atoms/badge.theme";
import { alertTheme } from "../../components/molecules/alert.theme";
import { inputTheme } from "../../components/atoms/input.theme";
import { fieldErrorMessageTheme, fieldLabelTheme } from "../../components/molecules/fields/field-label.theme";
import { tabsTheme } from "../../components/molecules/tabs.theme";
import { modalTheme } from "../../components/molecules/modal.theme";
import { dividerTheme } from "../../components/atoms/divider.theme";
import { linkTheme } from "../../components/atoms/link.theme";
import { spinnerTheme } from "../../components/atoms/spinner.theme";
import { spaces } from "./spaces";
import { shadows } from "./shadows";
import { breakpoints } from "./breakpoints";
import { maxWidths } from "./max-widths";

export const appTheme = {
  colors: colors,
  typography: typography,
  radius: radius,
  spaces: spaces,
  shadows: shadows,
  breakpoints: breakpoints,
  maxWidths: maxWidths,
  components: {
    alert: alertTheme,
    divider: dividerTheme,
    button: buttonTheme,
    link: linkTheme,
    badge: badgeTheme,
    input: inputTheme,
    spinner: spinnerTheme,
    fieldLabel: fieldLabelTheme,
    fieldErrorMessage: fieldErrorMessageTheme,
    modal: modalTheme,
    tabs: tabsTheme,
  },
};

export type AppTheme = typeof appTheme;
