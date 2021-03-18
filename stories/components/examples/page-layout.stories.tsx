import {TestHeaderLogo} from "../../utils/stories-container";
import * as React from "react";
import {
    colors,
    Footer,
    Header,
    Heading1,
    Horizontal,
    HorizontalDivider,
    MaxWidth,
    NavigationItem,
    PageBody,
    PageRoot,
    Paragraph,
    ResponsiveLayout,
    Sidebar,
    SidebarItem,
    SidebarItemList,
    SidebarToggle,
    SmallText,
    StretchSpacer,
    Vertical,
    VerticalSpacer,
} from "../../../src";

export default {
    title: "Examples/Page",
};

export const page = () => (
    <PageRoot>
        <ExampleHeader/>
        <PageBody>
            <Vertical>
                <Heading1>Welcome to my Website</Heading1>
                <Vertical spacing={12}>
                    <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                    <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                    <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                    <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                    <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                    <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
                </Vertical>
            </Vertical>
        </PageBody>
        <HorizontalDivider/>
        <Footer>
            <VerticalSpacer spacing={12}/>
            <SmallText textAlign={"center"}>Build in Melbourne</SmallText>
            <VerticalSpacer spacing={12}/>
        </Footer>
    </PageRoot>

);
//
// export const landingPage= () => (
//     <PageRoot>
//         <ExampleHeader/>
//         <VerticalSpacer spacing={32}/>
//         <LandingPageBody>
//             <Vertical>
//                 <img src={"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"}/>
//                 <LandingPageSection>
//                     <Heading1>Welcome to my Landing PageWebsite</Heading1>
//                 </LandingPageSection>
//                 <LandingPageSection verticalPadding={24}>
//                     <Vertical spacing={12}>
//                         <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
//                         <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
//                         <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
//                         <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
//                         <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
//                         <Paragraph>Lorum Ipsume - Hello I am Ian</Paragraph>
//                     </Vertical>
//                 </LandingPageSection>
//             </Vertical>
//         </LandingPageBody>
//         <Footer>
//             <SmallText textAlign={"center"}>Build in Melbourne</SmallText>
//         </Footer>
//     </PageRoot>
// );

const ExampleHeader = () => {
    const Links = [
        {
            href: "",
            text: "How it works",
        },
        {
            href: "",
            text: "Pricing",
        },
        {
            href: "",
            text: "Contact us",
        },
    ];

    const RightLinks = [
        {
            href: "",
            text: "Sign up",
        },
        {
            href: "",
            text: "Login",
        },
    ];

    const [isSidebarOpen, setIsSideBarOpen] = React.useState(false);
    return (
        <ResponsiveLayout
            renderMobile={() => (
                <MobileHeader
                    logo={<TestHeaderLogo/>}
                    isSidebarOpen={isSidebarOpen}
                    onSidebarStateChange={({isOpen}) => setIsSideBarOpen(isOpen)}
                    sidebarNavigation={
                        <SidebarItemList>
                            {Links.map((it) => (
                                <SidebarItem
                                    key={it.text}
                                    onClick={() => {
                                        setIsSideBarOpen(false);
                                        alert(it.text);
                                    }}
                                >
                                    {it.text}
                                </SidebarItem>
                            ))}
                        </SidebarItemList>
                    }
                />
            )}
            renderDesktop={() => (
                <DesktopHeader
                    logo={<TestHeaderLogo/>}
                    leftLinks={Links.map((it) => (
                        <NavigationItem key={it.text} href={it.href} onClick={() => alert(it.text)}
                                        colorScheme={"green"}>
                            {it.text}
                        </NavigationItem>
                    ))}
                    rightLinks={RightLinks.map((it) => (
                        <NavigationItem
                            key={it.text}
                            href={it.href}
                            onClick={() => alert(it.text)}
                            colorScheme={"blue"}
                        >
                            {it.text}
                        </NavigationItem>
                    ))}
                />
            )}
        />

    );
};

type DesktopHeaderProps = {
    logo: React.ReactNode;
    leftLinks?: React.ReactNode[];
    rightLinks?: React.ReactNode[];
}

const DesktopHeader = (props: DesktopHeaderProps) => (
    <Header style={{backgroundColor: colors.grey["200"]}}>
        <MaxWidth centered style={{paddingTop:"12px", paddingBottom:"12px"}}>
            <Horizontal verticalAlign={"center"}>
                <Horizontal verticalAlign={"center"} spacing={24}>
                    {props.logo}
                    {props.leftLinks?.length != null && props.leftLinks?.length > 0 && (
                        <Horizontal spacing={14} verticalAlign={"center"}>
                            {props.leftLinks?.map((it) => it)}
                        </Horizontal>
                    )}
                </Horizontal>
                {props.rightLinks?.length != null && props.rightLinks?.length > 0 && (
                    <>
                        <StretchSpacer/>
                        <Horizontal spacing={14} verticalAlign={"center"}>
                            {props.rightLinks?.map((it) => it)}
                        </Horizontal>
                    </>
                )}
            </Horizontal>
        </MaxWidth>
    </Header>
);

type MobileHeaderProps = {
    logo: React.ReactNode;
    isSidebarOpen: boolean;
    onSidebarStateChange: (state: { isOpen: boolean }) => void;
    sidebarNavigation: React.ReactNode;
} ;

const MobileHeader = (props: MobileHeaderProps) => (
    <Header>
        <MaxWidth
            centered
            style={{paddingTop:"12px", paddingBottom:"12px"}}
        >
            <Horizontal verticalAlign={"center"}>
                {props.logo}
                <StretchSpacer/>
                <SidebarToggle onClick={() => props.onSidebarStateChange({isOpen: true})}/>
            </Horizontal>
        </MaxWidth>
        <Sidebar isOpen={props.isSidebarOpen} onStateChange={props.onSidebarStateChange}>
            {props.sidebarNavigation}
        </Sidebar>
    </Header>
);