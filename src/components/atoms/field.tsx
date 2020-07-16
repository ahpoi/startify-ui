import * as React from "react";
import styled from "styled-components";

export const Field = (props: { id?: string, label?: string, star?: boolean, children: React.ReactNode, error?: string | null }) => {
  const star = props.star && <span style={{ color: "red", marginLeft: "1px", fontWeight: 200 }}>*</span>;
  return <div>
    {props.label && <div style={{ marginBottom: "8px" }}>
        <StyledLabel htmlFor={props.id}>{props.label} {star}</StyledLabel>
    </div>}
    {props.children}
    {props.error &&
    <StyledFieldError id={props.id ? props.id + "-error" : ""} style={{ marginTop: "6px" }} aria-live="assertive"
                      aria-atomic="true">
      {props.error}
    </StyledFieldError>}
  </div>;
};

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.input.label.fontSize};
  font-weight: ${({ theme }) => theme.input.label.fontWeight};
  color: ${({ theme }) => theme.input.label.color};
`;

const StyledFieldError = styled.div`
  font-size: ${({ theme }) => theme.input.label.fontSizeError};
  font-weight: ${({ theme }) => theme.input.label.fontWeightError};
  color: ${({ theme }) => theme.input.label.colorError};
`;

