import * as React from "react";
import {Link, LinkButton} from "../../../src";
import {StoriesDefaultThemeProvider, StoriesVerticalContainer} from "../../utils/stories-container";

export default {
  title: "Action|Link",
  component: Link
};

export const link = () =>
    <StoriesDefaultThemeProvider>
      <StoriesVerticalContainer>
        <Link href={"/hello"} text={"Link"}/>
      </StoriesVerticalContainer>
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
