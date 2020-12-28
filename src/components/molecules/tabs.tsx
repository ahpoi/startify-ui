import * as React from "react";
import styled from "styled-components";

type TabsProps = {
  activeKey?: number;
  children: React.ReactElement<TabContentProp> | React.ReactElement<TabContentProp>[];
  config?: {
    mode?: "rerender-view" | "hide-view";
    style: {
      tabColor: string;
      tabColorActive: string;
    };
  };
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(props.activeKey ?? 0);
  const children: React.ReactElement<TabContentProp>[] = React.Children.toArray(props.children).filter(
    (c) => !!c
  ) as any;
  const activeTabContent = children[activeTab];
  return (
    <div>
      <TabButtonsContainer>
        {children.map((tabContentComponent, i) => (
          <TabButton type={"button"} key={i} onClick={() => setActiveTab(i)} isActive={activeTab === i}>
            {tabContentComponent.props.label}
          </TabButton>
        ))}
      </TabButtonsContainer>
      <div>{activeTabContent.props.children}</div>
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
  display: inline-block;
  cursor: pointer;
  height: auto;
  padding: 0px;
  text-decoration: none;
  outline: none;
  line-height: 1em;
  background: none;
  border: none;
`;
