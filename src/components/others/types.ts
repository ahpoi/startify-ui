export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type SizeType = "xs" | "sm" | "md" | "lg";
