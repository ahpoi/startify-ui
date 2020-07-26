import * as React from "react";
import {createPortal} from "react-dom";

import styled from "styled-components";
import {Breakpoints, Spaces} from "../../styles/sizes";
import {Button, Heading4, Horizontal, StretchSpacer, Text, VerticalSpacer} from "../..";
import {useKeyboardEvent, useOnOutsideClick} from "../../hooks/common.hook";
import {IconClose} from "../others/icons";

interface ModalProps {
  title: string
  isOpen?: boolean
  onSubmit?: () => any;
  onSubmitLoading?: boolean;
  submitBtnType?: "submit" | "button";
  submitBtnTxt?: string;
  onClose?: () => any;
  closeBtnTxt?: string;
  hasCloseButton?: boolean;
  hasCloseIcon?: boolean;
  message?: string;
  modalWidth?: number;
  children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {

  const { title, message, modalWidth, isOpen, hasCloseIcon = false, hasCloseButton = false, children } = props;
  const { onSubmit, submitBtnTxt = "Proceed", onSubmitLoading, submitBtnType, onClose, closeBtnTxt = "Cancel" } = props;

  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!onSubmitLoading) {
      onClose?.();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? createPortal(<ModalOverlay>
    <ModalContainer ref={node} modalWidth={modalWidth}>
      <Horizontal verticalAlign={"center"}>
        <Heading4 fontWeight={"bold"}>{title}</Heading4>
        {hasCloseIcon && <><StretchSpacer/><IconClose onClick={onClose} size={24}/></>}
      </Horizontal>
      <VerticalSpacer spacing={24}/>
      {message && <Text>{message}</Text>}
      {children}
      <VerticalSpacer spacing={32}/>
      <Horizontal horizontalAlign={"right"} spacing={12}>
        {hasCloseButton &&
        <Button onClick={_onClose} variant={"text"}>{closeBtnTxt}</Button>}
        <Button onClick={onSubmit} isLoading={onSubmitLoading} type={submitBtnType}>{submitBtnTxt}</Button>
      </Horizontal>
    </ModalContainer>
  </ModalOverlay>, document.body) : null;
};


interface SimpleModal {
  isOpen?: boolean
  isClosable?: boolean
  onClose: () => void
  children: React.ReactNode;
  modalWidth?: number;
}

/**
 * Basic Modal that allows the consumer to provide its on UI
 */
export const SimpleModal = (props: SimpleModal) => {

  const { isOpen, onClose, isClosable = true, modalWidth, children } = props;
  const node = React.useRef<HTMLDivElement>(null);

  const _onClose = () => {
    //Used for to prevent user from escaping or an action is happening eg:
    //API request
    if (isClosable) {
      onClose();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? createPortal(<ModalOverlay>
    <ModalContainer ref={node} modalWidth={modalWidth}>
      {children}
    </ModalContainer>
  </ModalOverlay>, document.body) : null;
};

export const ModalOverlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
`;

export const ModalContainer = styled.div<{ modalWidth?: number }>`
  background: white;
  z-index: 100;
  max-width: ${props => props.modalWidth ?? 500}px;
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
