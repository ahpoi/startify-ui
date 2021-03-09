import * as React from "react";
import styled from "styled-components";
import { fadeIn } from "../others/animations";
import { ColorScheme } from "../../theme/styles/colors";
import { useColorScheme } from "../../theme/styles/hooks";

type TabsProps = {
  activeKey?: number;
  colorScheme?: ColorScheme;
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
          <TabButton
            colorScheme={props.colorScheme ?? "secondary"}
            type={"button"}
            role={"tab"}
            key={i}
            onClick={() => setActiveTab(i)}
            isActive={activeTab === i}
          >
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
  isActive?: boolean;
  colorScheme?: ColorScheme;
};

const TabLists = styled.div`
  display: flex;
  flex-direction: row;
  border-color: ${({ theme }) => theme.components.tabs.base.borderBottomColor};
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
  color: ${({ theme, colorScheme }) =>
    useColorScheme(theme.components.tabs.action.color, theme.colors[colorScheme as never])};
  font-size: ${({ theme }) => theme.components.tabs.action.fontSize};
  font-weight: ${({ theme }) => theme.components.tabs.action.fontWeight};
  padding: ${({ theme }) => theme.components.tabs.action.padding};
  margin-bottom: -2px;
  text-decoration: none;
  outline: none;
  background: none;
  border: none;
  transition: color 0.2s ease 0s;
  ${({ isActive, theme, colorScheme }) =>
    isActive &&
    `
    color: ${useColorScheme(theme.components.tabs.action.colorOnHover, theme.colors[colorScheme as never])};
    border-bottom: 2px solid ${useColorScheme(
      theme.components.tabs.action.colorOnHover,
      theme.colors[colorScheme as never]
    )};
  `};
  &:hover:enabled,
  &:focus:enabled {
    color: ${({ theme, colorScheme }) =>
      useColorScheme(theme.components.tabs.action.colorOnHover, theme.colors[colorScheme as never])};
  }
`;

const TabContentContainer = styled.div`
  margin: ${({ theme }) => theme.components.tabs.content.padding};
  ${fadeIn}
`;
