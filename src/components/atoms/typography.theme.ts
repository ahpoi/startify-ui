export const typography = {
  fontFamily: {
    heading: "Helvetica,Arial,sans-serif",
    body: "Helvetica,Arial,sans-serif",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  color: {
    heading: "#2A2A2A",
    body: {
      dark: "#2A2A2A",
      mid: "#585858",
      light: "#bdbdbd",
    },
  },
  size: {
    heading: {
      1: {
        web: "36px",
        mobile: "28px",
      },
      2: {
        web: "30px",
        mobile: "24px",
      },
      3: {
        web: "26px",
        mobile: "20px",
      },
      4: {
        web: "20px",
        mobile: "16px",
      },
      5: {
        web: "16px",
        mobile: "14px",
      },
    },
    body: {
      xs: "10px",
      sm: "12px",
      md: "14px",
      lg: "16px",
    },
  },
};

export type Typography = typeof typography;
