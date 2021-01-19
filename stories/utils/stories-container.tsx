import {
    DesktopHeader,
    HeaderLogo,
    NavigationLink,
    StartifyProvider,
} from "../../src";
import * as React from "react";

export const StoriesDefaultThemeProvider = (props: { children: React.ReactNode }) => {
    const theme = {
        typography: { fontFamily: {body: "Montserrat,Helvetica Neue", heading: "Montserrat, Helvetica"}}
    }
    return <StartifyProvider rootId={'root'} theme={theme}>{props.children}</StartifyProvider>
};

export const TestHeaderLogo = () => (
    <HeaderLogo name={"Dog House"} color={"#FF5050"} fontWeight={500} onClick={() => 0} logo={<TestLogo/>}/>
);

export const onClickComponent = () => {
    alert("I have clicked")
}

export const TestLogo = () => (
    <svg height={24} width={24} viewBox="0 0 512 512">
        <path d="M412.374 150.124l23.755 24.819 19.612 4.061v-18.581l-18.571-21.367-24.796-7.512z" fill="#a71f29"/>
        <path
            d="M455.742 100.622c0-5.701-4.622-10.323-10.323-10.323h-22.722c-5.701 0-10.323 4.622-10.323 10.323v30.921l43.368 28.88z"
            fill="#c32430"
        />
        <path
            d="M253.229 86.124L68.322 209.259l-12.063 17.033v18.581h399.483v-18.581l-12.063-17.033L258.771 86.124a4.998 4.998 0 00-5.542 0z"
            fill="#d8e5ef"
        />
        <path
            d="M253.229 113.705L56.259 244.874v201.682c0 8.551 6.932 15.484 15.484 15.484h368.515c8.552 0 15.484-6.932 15.484-15.484V244.874l-196.97-131.169a5 5 0 00-5.543 0z"
            fill="#edf4fa"
        />
        <path
            d="M503.215 210.618L266.923 53.264a19.709 19.709 0 00-21.846 0L8.785 210.618c-9.058 6.032-11.511 18.266-5.479 27.325a19.74 19.74 0 002.795 3.317c.821-.784 10.706-1.519 11.684-2.17L245.077 90.736a19.709 19.709 0 0121.846 0L494.215 239.09c.979.652 10.865 1.388 11.687 2.173a19.787 19.787 0 002.792-3.32c6.032-9.059 3.579-21.293-5.479-27.325z"
            fill="#da4a54"
        />
        <path
            d="M30.631 243.422L253.229 95.187a5 5 0 015.543 0L481.37 243.422a19.616 19.616 0 0010.905 3.306c4.992 0 9.906-1.902 13.628-5.464a19.73 19.73 0 00-2.687-2.173L266.923 81.736a19.709 19.709 0 00-21.846 0L8.785 239.09a19.733 19.733 0 00-2.683 2.17c6.519 6.239 16.703 7.373 24.529 2.162z"
            fill="#d82e3d"
        />
        <g>
            <g fill="#407093">
                <path
                    d="M183.748 365.434c0 18.669 17.608 30.678 29.781 30.678 16.859 0 21.809-10.905 42.471-10.905s25.612 10.905 42.471 10.905c12.173 0 29.781-12.009 29.781-30.678-4.337-17.792-18.997-21.309-25.018-31.645-4.845-8.317-11.363-46.9-47.233-46.9-35.871 0-42.388 38.584-47.233 46.9-6.023 10.337-20.683 13.854-25.02 31.645zM141.516 295.338c8.36 14.48 23.775 21.232 34.43 15.08 3.773-2.179 7.942-10.526 7.942-18.949a40.226 40.226 0 00-3.786-8.828c-8.36-14.48-23.775-21.231-34.43-15.08-3.773 2.179-6.438 5.687-7.942 9.949-.001 7.218 2.119 14.941 3.786 17.828zM190.558 229.426c4.864 17.732 19.385 29.205 32.434 25.626 7.688-2.109 15.341-13.789 15.341-26.885a44.945 44.945 0 00-.522-2.123c-4.864-17.732-19.385-29.206-32.434-25.627-7.688 2.109-13.146 8.975-15.341 17.885 0 3.057.522 11.124.522 11.124z"/>
            </g>
            <path
                d="M328.252 365.434c-4.008 14.402-17.608 21.678-29.781 21.678-16.859 0-21.809-10.905-42.471-10.905s-25.612 10.905-42.471 10.905c-12.173 0-25.772-7.275-29.781-21.678a41.255 41.255 0 00-.924 5.249c-2.583 23.244 15.221 35.01 30.705 35.01 16.859 0 21.809-10.905 42.471-10.905s25.612 10.905 42.471 10.905c15.484 0 33.288-11.766 30.705-35.01a41.286 41.286 0 00-.924-5.249zM175.946 301.418c-10.655 6.152-26.07-.6-34.43-15.08a40.206 40.206 0 01-3.786-8.828c-2.743 7.772-1.613 18.057 3.786 27.409 8.36 14.48 23.775 21.232 34.43 15.08 8.53-4.925 11.417-16.628 7.942-28.529-1.504 4.261-4.169 7.77-7.942 9.948zM222.991 246.052c-13.049 3.579-27.57-7.894-32.434-25.626a44.945 44.945 0 01-.522-2.123c-1.531 6.213-1.476 13.419.522 20.704 4.864 17.732 19.385 29.206 32.434 25.627 12.527-3.436 19.136-19.497 15.341-36.466-2.195 8.91-7.653 15.775-15.341 17.884z"
                fill="#365e7d"
            />
            <path
                d="M370.484 295.338c-8.36 14.48-23.775 21.232-34.43 15.08-3.773-2.179-7.942-10.526-7.942-18.949a40.274 40.274 0 013.786-8.828c8.36-14.48 23.775-21.231 34.43-15.08 3.773 2.179 6.438 5.687 7.942 9.949 0 7.218-2.119 14.941-3.786 17.828zM321.442 229.426c-4.864 17.732-19.385 29.205-32.434 25.626-7.688-2.109-15.341-13.789-15.341-26.885.158-.707.327-1.414.522-2.123 4.864-17.732 19.385-29.206 32.434-25.627 7.688 2.109 13.146 8.975 15.341 17.885 0 3.057-.522 11.124-.522 11.124z"
                fill="#407093"
            />
            <path
                d="M336.054 301.418c10.655 6.152 26.07-.6 34.43-15.08a40.206 40.206 0 003.786-8.828c2.743 7.772 1.613 18.057-3.786 27.409-8.36 14.48-23.775 21.232-34.43 15.08-8.53-4.925-11.417-16.628-7.942-28.529 1.504 4.261 4.169 7.77 7.942 9.948zM289.009 246.052c13.049 3.579 27.569-7.894 32.434-25.626a46.21 46.21 0 00.522-2.123c1.531 6.213 1.476 13.419-.522 20.704-4.864 17.732-19.385 29.206-32.434 25.627-12.527-3.436-19.136-19.497-15.341-36.466 2.195 8.91 7.653 15.775 15.341 17.884z"
                fill="#365e7d"
            />
        </g>
    </svg>
);

const LeftLinks = [
    {
        href: "",
        text: "How it works",
    },
    {
        href: "",
        text: "Pricing",
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

export const TestDesktopHeader = () => (
    <DesktopHeader
        logo={<TestHeaderLogo/>}
        leftLinks={LeftLinks.map((it) => (
            <NavigationLink key={it.text} href={it.href} onClick={() => alert(it.text)}>
                {it.text}
            </NavigationLink>
        ))}
        rightLinks={RightLinks.map((it) => (
            <NavigationLink
                key={it.text}
                href={it.href}
                color={"#008DA6"}
                onClick={() => alert(it.text)}
            >
                {it.text}
            </NavigationLink>
        ))}
    />
);
