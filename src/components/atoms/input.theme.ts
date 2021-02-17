import { radius } from "../../theme/styles/radius";
import { typography } from "../../theme/styles/typography";

export const inputTheme = {
  base: {
    fontSize: "16px",
    fontWeight: 400,
    height: "40px",
    lineHeight: "normal",
    padding: "8px 10px",
    color: typography.color.body.dark,
    backgroundColor: "whiteAlpha.900",
    backgroundColorDisabled: "grey.200",
    borderColor: "grey.300",
    borderColorError: "red.500",
    borderColorOnHover: "secondary.500",
    borderRadius: radius.xs,
    borderWidth: "1px",
    borderWidthOnHover: "1px",
  },
};

export type InputTheme = typeof inputTheme;
