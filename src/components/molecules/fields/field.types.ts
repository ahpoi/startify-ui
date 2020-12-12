export type FieldProps = {
  label: string;
  star?: boolean;
} & ErrorFieldProps;

export type ErrorFieldProps = {
  error?: string | null;
};
