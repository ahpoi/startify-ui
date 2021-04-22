import { typography } from "../atoms/typography.theme";
import { colors } from "../../theme/styles/colors";

export const tabsTheme = {
  base: {
    borderBottomColor: colors.grey["200"],
  },
  action: {
    color: typography.color.body.dark,
    colorOnHover: "500",
    fontWeight: typography.fontWeight.medium,
    fontSize: typography.size.body.md,
    padding: "0 10px 12px 10px",
  },
  content: {
    padding: "20px 0 0 0",
  },
};

export type TabsTheme = typeof tabsTheme;
