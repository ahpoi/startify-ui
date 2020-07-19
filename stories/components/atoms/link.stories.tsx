import * as React from "react";
import {Link, LinkButton, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider, StoriesVerticalContainer} from "../../utils/stories-container";

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
      <StoriesVerticalContainer>
        <Link href={"/hello"}
              text={"Link"}
              customStyle={{ color: "red", colorOnHover: "blue" }}/>
      </StoriesVerticalContainer>
    </StoriesDefaultThemeProvider>;

export const linkButton = () =>
    <StoriesDefaultThemeProvider>
      <StoriesVerticalContainer>
        <div>
          <LinkButton text={"Button styled as link"} onClick={() => console.log("submitted")}/>
        </div>
      </StoriesVerticalContainer>
    </StoriesDefaultThemeProvider>;
