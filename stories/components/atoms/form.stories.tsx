import {Button, Form, TextInputField} from "../../../src";
import {StoriesDefaultThemeProvider, StoriesVerticalContainer} from "../../utils/stories-container";
import * as React from "react";

export default {
  title: "Containers|Form",
  component: Form
};

export const formContainer = () => (
    <StoriesDefaultThemeProvider>
      <Form onSubmit={() => console.log("Submitted")}>
        <StoriesVerticalContainer>
          <TextInputField label={"First name"}/>
          <TextInputField label={"Last name"}/>
          <Button type={"submit"}>Submit</Button>
        </StoriesVerticalContainer>
      </Form>
    </StoriesDefaultThemeProvider>
);
