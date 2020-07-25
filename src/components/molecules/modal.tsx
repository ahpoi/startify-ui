import * as React from "react";
import {createPortal} from "react-dom";

import styled from "styled-components";
import {Breakpoints, Spaces} from "../../styles/sizes";
import {Button, Heading4, Horizontal, Text, VerticalSpacer} from "../..";
import {useKeyboardEvent, useOnOutsideClick} from "../../hooks/common.hook";

interface ModalProps {
  title: string
  isVisible?: boolean
  onSubmit?: () => any;
  submitBtnTxt?: string;
  submitBtnType?: "submit" | "button";
  onSubmitLoading?: boolean;
  onCancel?: () => any;
  cancelBtnTxt?: string;
  message?: string;
  renderDivId?: string;
  children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { title, message, isVisible, children, renderDivId = "modal-root" } = props;
  const { onSubmit, submitBtnTxt = "Proceed", onSubmitLoading, submitBtnType, onCancel, cancelBtnTxt = "Cancel" } = props;

  const node = React.useRef<HTMLDivElement>(null);

  useKeyboardEvent("escape", () => onCancel?.());
  useOnOutsideClick(node, () => onCancel?.());

  return isVisible ? createPortal(<ModalOverlay>
    <ModalContainer ref={node}>
      <Heading4 fontWeight={"bold"}>{title}</Heading4>
      <VerticalSpacer space={24}/>
      {message && <Text>{message}</Text>}
      {children}
      <VerticalSpacer space={24}/>
      <Horizontal horizontalAlign={"right"} space={12}>
        {onCancel &&
        <Button onClick={onCancel} variant={"text"}>{cancelBtnTxt}</Button>}
        <Button onClick={onSubmit} isLoading={onSubmitLoading} type={submitBtnType}>{submitBtnTxt}</Button>
      </Horizontal>
    </ModalContainer>
  </ModalOverlay>, document.getElementById(renderDivId)!!) : <></>;
};

const ModalOverlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div<{ maxWidth?: number }>`
  background: white;
  z-index: 100;
  max-width: ${props => props.maxWidth ?? 500}px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  border-radius: ${props => props.theme.border.radiusMedium}px;
  box-shadow: ${props => props.theme.shadow.large}px;
  padding: ${Spaces.medium}px;
  @media (max-width: ${Breakpoints.small}px) {
     padding: ${Spaces.small}px;
  }
`;
