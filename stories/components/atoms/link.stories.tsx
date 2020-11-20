import * as React from "react";
import {Link, LinkButton, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
  title: "Atoms/Link",
  component: Link
};

export const link = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <Link href={"/hello"}>
          Link
        </Link>
      </Vertical>
    </StoriesDefaultThemeProvider>;

export const linkVariant = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <Link href={"/hello"}
              underline={false}
              variant={"text"}>
          Link
        </Link>
      </Vertical>
    </StoriesDefaultThemeProvider>;

export const linkButton = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <div>
          <LinkButton onClick={() => console.log("submitted")}>
            Link
          </LinkButton>
        </div>
      </Vertical>
    </StoriesDefaultThemeProvider>;
