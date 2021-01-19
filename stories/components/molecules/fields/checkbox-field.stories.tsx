import {Paragraph} from "../../../../src";
import * as React from "react";
import {CheckboxField} from "../../../../src/components/molecules/fields/checkbox-field";

export default {
    title: "Molecules/Fields/CheckboxField",
    component: CheckboxField,
};

export const checkboxField = () => (
    <CheckboxField name={"isTermsAndConditionsAccepted"}
                   label={
                       <Paragraph>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis rhoncus odio
                           et ultricies. Donec urna urna, ultrices ac cursus eu, mattis sed nulla. Maecenas in ipsum
                           id nibh euismod mattis sit amet a augue. Nunc efficitur nisi enim, non lacinia libero
                           gravida ac. Suspendisse maximus felis arcu. Aenean eu tortor vitae lacus viverra laoreet
                           vel in nunc. Vivamus vitae enim sit amet eros blandit commodo. Pellentesque a egestas
                           nulla. Sed eleifend eleifend sollicitudin. Aliquam gravida sem vitae dolor finibus, ac
                           convallis felis venenatis. Aliquam placerat accumsan quam in elementum. Duis hendrerit mi
                           sit amet euismod tincidunt. Aliquam vitae arcu nec nunc pulvinar dictum non at velit.
                           Fusce mauris lacus, varius non quam vel, elementum porttitor mi. Cras molestie ut augue
                           ac venenatis.
                       </Paragraph>}
    />
);
