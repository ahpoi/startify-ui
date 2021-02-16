import { ColorScheme } from "./colors";

/**
 * Calculate color system from number system or default to the color:
 * Eg: useColorScheme(500, primary) -> primary.500
 * Eg: useColorScheme(white, primary) -> white
 *
 * */
export const useColorScheme = (color: any, scheme: ColorScheme) => {
  const colorSystems = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
  if (colorSystems.includes(color)) {
    return scheme[color as any];
  }
  return color;
};
