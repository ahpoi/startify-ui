import * as React from "react";

export interface FormProps {
  onSubmit: () => any;
  children: React.ReactNode
}

export const Form = ({ onSubmit, children }: FormProps) =>
    <form
        onKeyDown={
          (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSubmit();
            }
          }
        }

        onSubmit={
          (e) => {
            e.preventDefault();
            e.stopPropagation();
            onSubmit();
          }
        }>
      {children}
    </form>;
