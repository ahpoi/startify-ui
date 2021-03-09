import { radius } from "../../theme/styles/radius";
import { shadows } from "../../theme/styles/shadows";

export const modalTheme = {
  container: {
    width: 450,
    padding: "24px",
    borderRadius: radius.sm,
    boxShadow: shadows.xl,
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  body: {
    margin: "16px 0 24px 0",
  },
};
