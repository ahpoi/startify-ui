import * as React from "react";
import {Link, LinkButton, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
  title: "Action|Link",
  component: Link
};

export const link = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <Link href={"/hello"} >
          Link
        </Link>
      </Vertical>
    </StoriesDefaultThemeProvider>;

export const linkCustomStyle = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <Link href={"/hello"}
              underline={false}
              customStyle={{ color: "red", fontSize: "10px" }}>
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
