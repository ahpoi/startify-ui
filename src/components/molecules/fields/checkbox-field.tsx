import * as React from "react";
import { Input, InputProps, Label } from "../../../index";
import styled from "styled-components";

type Props = { label: React.ReactNode } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const CheckboxField = React.forwardRef((props: Props, ref: React.LegacyRef<HTMLInputElement>) => {
  const getForwardProps = () => {
    const { label, ...propsToForward } = props;
    return propsToForward;
  };
  return (
    <CheckboxLabel htmlFor={props.id}>
      <CheckboxInput type={"checkbox"} {...getForwardProps()} ref={ref} />
      <div>{props.label}</div>
    </CheckboxLabel>
  );
});

const CheckboxInput = styled(Input)`
  width: auto;
  height: auto;
  margin-right: 10px;
  &:focus:enabled {
    outline: dotted thin;
  }
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputProps
>;

const CheckboxLabel = styled(Label)`
  font-weight: 400;
  line-height: 24px;

  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
