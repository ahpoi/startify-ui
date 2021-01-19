import * as React from "react";
import { Link, Vertical } from "../../../src";

export default {
  title: "Atoms/Link",
  component: Link,
};

export const link = () => (
    <Vertical>
      <Link href={"/hello"}>Link</Link>
    </Vertical>
);