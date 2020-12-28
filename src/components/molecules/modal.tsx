import * as React from "react";

import styled from "styled-components";
import { CommonColors } from "../../styles/colors";
import { Breakpoints, Spaces } from "../../styles/sizes";
import { Button, ButtonVariantType, Heading4, Horizontal, StretchSpacer, Text, Vertical, VerticalSpacer } from "../..";
import { useKeyboardEvent, useOnOutsideClick } from "../../hooks/common.hook";
import { IconClose, IconError } from "../others/icons";
import { fadeIn } from "../others/animations";
import { Portal } from "../others/portal";

type BaseModalProps = {
  isOpen?: boolean;
  onClose?: () => any;
  modalWidth?: number;
  padding?: number;
};

type ModalProps = {
  title: string;
  actions: {
    align?: "horizontal" | "vertical";
    primary: {
      onSubmit: () => any;
      isLoading?: boolean;
      text?: string;
      variant?: ButtonVariantType;
    };
    secondary?: {
      onSubmit: () => any;
      text?: string;
      variant?: ButtonVariantType;
    };
  };
  error?: ModalErrorProps | null;
  closeIcon?: boolean;
  message?: string;
  children?: React.ReactNode;
} & BaseModalProps;

export const Modal = (props: ModalProps) => {
  const { title, message, modalWidth, padding, isOpen, closeIcon = true, onClose, error = null, children } = props;
  const { primary, secondary, align = "horizontal" } = props.actions;
  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!primary.isLoading) {
      onClose?.();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  const PrimaryButton = () => (
    <Button onClick={primary.onSubmit} variant={primary.variant} isLoading={primary.isLoading}>
      {primary.text ?? "Submit"}
    </Button>
  );

  const SecondaryButton = () => (
    <Button onClick={secondary?.onSubmit} variant={secondary?.variant ?? "text"} disabled={primary.isLoading}>
      {secondary?.text ?? "Cancel"}
    </Button>
  );
  return isOpen ? (
    <Portal>
      <ModalOverlay>
        <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
          {!error && (
            <>
              <Horizontal verticalAlign={"center"}>
                <Heading4 fontWeight={"bold"}>{title}</Heading4>
                {closeIcon && (
                  <>
                    <StretchSpacer />
                    <ModalCloseButton onClick={_onClose} />
                  </>
                )}
              </Horizontal>
              {message && (
                <>
                  <VerticalSpacer spacing={16} />
                  <Text>{message}</Text>
                  <VerticalSpacer spacing={24} />
                </>
              )}
              {children && (
                <>
                  {children}
                  <VerticalSpacer spacing={32} />
                </>
              )}
              {align === "horizontal" && (
                <Horizontal horizontalAlign={"right"} spacing={12}>
                  {secondary && <SecondaryButton />}
                  <PrimaryButton />
                </Horizontal>
              )}
              {align === "vertical" && (
                <Vertical spacing={12}>
                  <PrimaryButton />
                  {secondary && <SecondaryButton />}
                </Vertical>
              )}
            </>
          )}
          {error && (
            <ModalErrorContent
              onClose={_onClose}
              title={error.title}
              message={error.message}
              onRetry={error.onRetry}
              onRetrying={error.onRetrying}
              retryButtonVariant={error.retryButtonVariant}
            />
          )}
        </ModalContainer>
      </ModalOverlay>
    </Portal>
  ) : null;
};

type ModalErrorProps = {
  title?: string;
  message?: string;
  onRetry?: () => any;
  onRetrying?: boolean;
  retryButtonVariant?: ButtonVariantType;
} & BaseModalProps;

export const ModalError = (props: ModalErrorProps) => {
  const { isOpen, title, message, modalWidth, padding, retryButtonVariant } = props;
  const { onRetry, onRetrying, onClose } = props;

  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!onRetrying) {
      onClose?.();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? (
    <Portal>
      <ModalOverlay>
        <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
          <ModalErrorContent
            onClose={_onClose}
            title={title}
            message={message}
            onRetry={onRetry}
            onRetrying={onRetrying}
            retryButtonVariant={retryButtonVariant}
          />
        </ModalContainer>
      </ModalOverlay>
    </Portal>
  ) : null;
};

const ModalErrorContent = (props: ModalErrorProps) => {
  const {
    title = "Something went wrong",
    message = "An unexpected error has occurred. Please try again soon!",
    retryButtonVariant = "text",
  } = props;
  const { onRetrying, onRetry, onClose } = props;
  return (
    <>
      <Horizontal horizontalAlign={"right"}>
        <ModalCloseButton onClick={onClose} />
      </Horizontal>
      <VerticalSpacer spacing={12} />
      <Vertical horizontalAlign={"center"}>
        <IconError size={48} />
        <Vertical horizontalAlign={"center"} spacing={12}>
          <Heading4>{title}</Heading4>
          <Text textAlign={"center"}>{message}</Text>
        </Vertical>
        {onRetry && (
          <Button onClick={onRetry} isLoading={onRetrying} variant={retryButtonVariant}>
            Try Again
          </Button>
        )}
      </Vertical>
      <VerticalSpacer spacing={32} />
    </>
  );
};

type BasicModalProps = {
  children: React.ReactNode;
} & BaseModalProps;

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

  return isOpen ? (
    <Portal>
      <ModalOverlay>
        <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
          {children}
        </ModalContainer>
      </ModalOverlay>
    </Portal>
  ) : null;
};

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  ${fadeIn}
`;

export const ModalContainer = styled.div<{ modalWidth?: number; padding?: number }>`
  background: white;
  z-index: 100;
  max-width: ${(props) => props.modalWidth ?? 500}px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  border-radius: ${(props) => props.theme.border.radiusSmall}px;
  box-shadow: ${(props) => props.theme.shadow.large}px;
  padding: ${(props) => props.padding ?? Spaces.medium}px;
  @media (max-width: ${Breakpoints.small}px) {
    width: 95%;
  }
`;

export const ModalCloseButton = (props: { onClick?: () => any }) => (
  <IconButton onClick={props.onClick}>
    <IconClose size={24} />
  </IconButton>
);

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
