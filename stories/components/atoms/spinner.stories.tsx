
import * as React from "react";
import { SpinnerDots, PageSpinner, SpinnerCircular } from "../../../src/components/atoms/spinner";

export default {
  title: "Atoms/Spinner",
  component: SpinnerCircular,
};

export const spinner = () => (
    <SpinnerCircular />
);

export const dotSpinner = () => (
    <SpinnerDots />
);

export const fullPageSpinner = () => (
    <PageSpinner variant={"circular"} />
);

export const fullPageDotsSpinner = () => (
    <PageSpinner variant={"dots"} />
);
