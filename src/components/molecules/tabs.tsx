import * as React from "react";
import styled from "styled-components";
import { fadeIn } from "../others/animations";

type TabsProps = {
  activeKey?: number;
  children: React.ReactElement<typeof TabContent> | React.ReactElement<typeof TabContent>[];
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(props.activeKey ?? 0);
  const children: React.ReactElement<TabContentProp>[] = React.Children.toArray(props.children).filter(
    (c) => !!c
  ) as any;
  const activeTabContent: React.ReactElement<TabContentProp> = children[activeTab];
  return (
    <div>
      <TabButtonsContainer>
        {children.map((tabContentComponent, i) => (
          <TabButton type={"button"} key={i} onClick={() => setActiveTab(i)} isActive={activeTab === i}>
            {tabContentComponent.props.label}
          </TabButton>
        ))}
      </TabButtonsContainer>
      <TabContentContainer>{activeTabContent.props.children}</TabContentContainer>
    </div>
  );
};

type TabContentProp = {
  label: string;
  children: React.ReactNode;
};

export const TabContent = (props: TabContentProp) => <>{props.children}</>;

type TabButtonProps = {
  disabled?: boolean;
  isActive?: boolean;
};

const TabButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 24px !important;
  }
  &>*: last-child {
    margin-right: 0px !important;
  }
`;

const TabButton = styled.button<TabButtonProps>`
  cursor: pointer;
  height: auto;
  font-size: ${(props) => props.theme.typography.size.md};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  padding: 0px 0px 4px 0;
  text-decoration: none;
  outline: none;
  line-height: 1em;
  background: none;
  border: none;
  color: ${({ theme }) => theme.typography.color.body.dark};
  ${({ isActive, theme }) =>
    isActive &&
    `
    color: ${theme.colors.secondary};
    border-bottom: 2px solid ${theme.colors.secondary};
  `};
  &:hover:enabled,
  &:focus:enabled,
  &:active:enabled {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const TabContentContainer = styled.div`
  margin-top: 16px;
  ${fadeIn}
`;
