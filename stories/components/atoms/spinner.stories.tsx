
import * as React from "react";
import { DotSpinner, PageSpinner, Spinner } from "../../../src/components/atoms/spinner";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
};

export const spinner = () => (
    <Spinner />
);

export const dotSpinner = () => (
    <DotSpinner />
);

export const fullPageSpinner = () => (
    <PageSpinner variant={"circular"} />
);

export const fullPageDotsSpinner = () => (
    <PageSpinner variant={"dots"} />
);
