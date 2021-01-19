import * as React from "react";
import styled from "styled-components";
import { fadeIn } from "../others/animations";
import { colors } from "../../theme/styles/colors";

type TabsProps = {
  activeKey?: number;
  children: React.ReactElement<typeof TabContent> | React.ReactElement<typeof TabContent>[];
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(props.activeKey ?? 1);
  const children: React.ReactElement<TabContentProp>[] = React.Children.toArray(props.children).filter(
    (c) => !!c
  ) as any;
  const activeTabContent: React.ReactElement<TabContentProp> = children[activeTab];
  return (
    <div>
      <TabLists role={"tablist"}>
        {children.map((tabContentComponent, i) => (
          <TabButton type={"button"} role={"tab"} key={i} onClick={() => setActiveTab(i)} isActive={activeTab === i}>
            {tabContentComponent.props.label}
          </TabButton>
        ))}
      </TabLists>
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

const TabLists = styled.div`
  display: flex;
  flex-direction: row;
  border-color: ${colors.grey["200"]};
  border-bottom-width: 2px;
  border-bottom-style: solid;
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
  font-size: ${(props) => props.theme.typography.size.body.md};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  padding: 0 10px 12px 10px;
  margin-bottom: -2px;
  text-decoration: none;
  outline: none;
  background: none;
  border: none;
  transition: color 0.2s ease 0s;
  color: ${({ theme }) => theme.typography.color.body.dark};
  ${({ isActive, theme }) =>
    isActive &&
    `
    color: ${theme.colors.secondary[500]};
    border-bottom: 2px solid ${theme.colors.secondary[500]};
  `};
  &:hover:enabled,
  &:focus:enabled,
  &:active:enabled {
    color: ${({ theme }) => theme.colors.secondary[500]};
  }
`;

const TabContentContainer = styled.div`
  margin-top: 20px;
  ${fadeIn}
`;
