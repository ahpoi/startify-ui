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
        <Link href={"/hello"} text={"Link"}/>
      </Vertical>
    </StoriesDefaultThemeProvider>;

export const linkCustomStyle = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <Link href={"/hello"}
              text={"Link"}
              customStyle={{ color: "red", colorOnHover: "blue" }}/>
      </Vertical>
    </StoriesDefaultThemeProvider>;

export const linkButton = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <div>
          <LinkButton text={"Button styled as link"} onClick={() => console.log("submitted")}/>
        </div>
      </Vertical>
    </StoriesDefaultThemeProvider>;
