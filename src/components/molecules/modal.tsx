import * as React from "react";

import styled from "styled-components";
import {CommonColors} from "../../styles/colors";
import {Breakpoints, Spaces} from "../../styles/sizes";
import {
  Button,
  ButtonVariantType,
  Heading4,
  Horizontal,
  StretchSpacer,
  Text,
  Vertical,
  VerticalSpacer
} from "../..";
import {useKeyboardEvent, useOnOutsideClick} from "../../hooks/common.hook";
import {IconClose, IconError} from "../others/icons";
import {fadeIn} from "../others/animations";
import {Portal} from "../others/portal";

type BaseModalProps = {
  isOpen?: boolean
  onClose?: () => void;
  modalWidth?: number;
  padding?: number;
}
type ModalProps = {
  title: string
  actions: {
    primary: {
      onSubmit: () => any;
      isLoading?: boolean;
      text?: string;
      variant?: ButtonVariantType;
    }
    secondary?: {
      onSubmit: () => any;
      text?: string;
      variant?: ButtonVariantType;
    }
  }
  closeIcon?: boolean;
  message?: string;
  children?: React.ReactNode;
} & BaseModalProps

export const Modal = (props: ModalProps) => {

  const { title, message, modalWidth, padding, isOpen, closeIcon = true, onClose, children } = props;
  const { primary, secondary } = props.actions;
  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!primary.isLoading) {
      onClose?.();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? <Portal>
    <ModalOverlay>
      <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
        <Horizontal verticalAlign={"center"}>
          <Heading4 fontWeight={"bold"}>{title}</Heading4>
          {closeIcon && <><StretchSpacer/>
              <ModalCloseButton onClick={_onClose}/>
          </>}
        </Horizontal>
        <VerticalSpacer spacing={24}/>
        {message && <Text>{message}</Text>}
        {children}
        <VerticalSpacer spacing={32}/>
        <Horizontal horizontalAlign={"right"} spacing={12}>
          {secondary &&
          <Button onClick={secondary.onSubmit} variant={secondary.variant ?? "text"}
                  disabled={primary.isLoading}>{secondary.text ?? "Cancel"}</Button>}
          <Button onClick={primary.onSubmit} variant={primary.variant}
                  isLoading={primary.isLoading}>{primary.text ?? "Submit"}</Button>
        </Horizontal>
      </ModalContainer>
    </ModalOverlay>
  </Portal> : null;
};

type ModalError = {
  title?: string;
  message?: string;
  onRetry?: () => any;
  onRetrying?: boolean;
  retryButtonVariant?: ButtonVariantType;
} & BaseModalProps

export const ModalError = (props: ModalError) => {

  const { isOpen, title = "Something went wrong", message = "An unexpected error has occurred. Please try again soon!", modalWidth, padding, retryButtonVariant = "text" } = props;
  const { onRetry, onRetrying, onClose } = props;

  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!onRetrying) {
      onClose?.();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? <Portal>
    <ModalOverlay>
      <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
        <Horizontal horizontalAlign={"right"}>
          <ModalCloseButton onClick={_onClose}/>
        </Horizontal>
        <VerticalSpacer spacing={12}/>
        <Vertical horizontalAlign={"center"}>
          <IconError size={48}/>
          <Vertical horizontalAlign={"center"} spacing={12}>
            <Heading4>{title}</Heading4>
            <Text textAlign={"center"}>{message}</Text>
          </Vertical>
          {onRetry &&
          <Button onClick={onRetry} isLoading={onRetrying} variant={retryButtonVariant}>Try Again</Button>}
        </Vertical>
        <VerticalSpacer spacing={32}/>
      </ModalContainer>
    </ModalOverlay>
  </Portal> : null;
};


type BasicModalProps = {
  children: React.ReactNode;
} & BaseModalProps

/**
 * Basic Modal that allows the consumer to provide its on UI
 */
export const BasicModal = (props: BasicModalProps) => {

  const { isOpen, onClose, modalWidth, padding, children } = props;
  const node = React.useRef<HTMLDivElement>(null);

  const _onClose = () => {
    onClose?.();
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? <Portal>
    <ModalOverlay>
      <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
        {children}
      </ModalContainer>
    </ModalOverlay>
  </Portal> : null;
};

export const ModalOverlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  ${fadeIn}
`;

export const ModalContainer = styled.div<{ modalWidth?: number, padding?: number }>`
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
  padding:  ${props => props.padding ?? Spaces.medium}px;
  @media (max-width: ${Breakpoints.small}px) {
     width: 95%;
  }
`;

export const ModalCloseButton = (props: { onClick: () => void }) =>
    <IconButton onClick={props.onClick}>
      <IconClose size={24}/>
    </IconButton>;

const IconButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: inline-block;
  &:focus,
  &:hover,
  &:active {
    border-radius: ${({ theme }) => theme.border.radiusxSmall}px;
    background-color: ${CommonColors.greyLight40};
  }  
` as React.FunctionComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
