import * as React from "react";

import styled from "styled-components";
import { IconButtonContainer, IconClose, IconQuestionMark } from "../others/icons";
import { Horizontal, useOnOutsideClick } from "../..";
import TetherComponent from "react-tether";

export type TooltipProps = {
  id?: string;
  children?: React.ReactNode;
};

export const Tooltip = (props: TooltipProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const node = React.useRef<HTMLDivElement>(null);
  useOnOutsideClick(node, () => setIsOpen(false));

  return (
    <Root>
      <TetherComponent
        attachment="bottom left"
        constraints={[
          {
            to: "window",
            pin: true,
          },
        ]}
        renderTarget={(ref) => (
          <IconButtonContainer
            id={props.id}
            ref={ref as any}
            type={"button"}
            aria-label="tooltip"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconQuestionMark size={12} />
          </IconButtonContainer>
        )}
        renderElement={(ref) =>
          isOpen && (
            <div ref={ref as any} role="tooltip">
              <ChildrenContainer ref={node}>
                {props.children}
                <IconButtonContainer
                  autoFocus={true}
                  type={"button"}
                  style={{ position: "absolute", right: "4px", top: "4px" }}
                  onClick={() => setIsOpen(false)}
                >
                  <IconClose size={14} />
                </IconButtonContainer>
              </ChildrenContainer>
            </div>
          )
        }
      />
    </Root>
  );
};

export const addTooltipIfAny = (content: React.ReactElement<any>, tooltip?: React.ReactElement<typeof Tooltip>) =>
  tooltip ? (
    <Horizontal spacing={6} verticalAlign={"center"}>
      {content}
      {tooltip}
    </Horizontal>
  ) : (
    content
  );

const Root = styled.div`
  display: inline-block;
  position: relative;
`;

const ChildrenContainer = styled.div`
  max-width: 350px;
  background: white;
  border-radius: ${({ theme }) => theme.border.radiusxSmall}px;
  color: ${(props) => props.theme.color.heading};
  padding: 20px 30px 20px 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;
