import * as React from "react";
import {Button, Paragraph, SelectField, Text, TextInputField, Tooltip, Vertical} from "../../../src";
import {useForm} from "react-hook-form";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import {zodResolver} from "@hookform/resolvers/zod";

import * as z from "zod";
import {RadioField, RadioFieldGroup} from "../../../src/components/molecules/fields/radio-field";
import {CheckboxField} from "../../../src/components/molecules/fields/checkbox-field";

const schema = z.object({
    firstName: z.string().nonempty({message: "First name required"}),
    lastName: z.string()
        .nonempty({message: "Last name required"})
        .max(10, "Last name cannot be more than 10 characters"),
    gender: z.string().nonempty({message: "Please select a gender"}),
    isAustralianCitizen: z.string().nonempty({message: "Please select an option"}),
    isTermsAndConditionsAccepted: z.boolean()
});

export default {
    title: "Examples/ReactFormHooks",
};

type FormValues = {
    firstName: string,
    lastName: string,
    gender: string,
    isAustralianCitizen: string,
    isTermsAndConditionsAccepted: boolean
};

export const signUpForm = () => {

    const {register, handleSubmit, errors} = useForm<FormValues>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormValues) => console.log(data);

    return (
        <StoriesDefaultThemeProvider>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Vertical>
                    <TextInputField name="firstName"
                                    label={"First name"}
                                    star
                                    error={errors.firstName?.message}
                                    ref={register}/>
                    <TextInputField name="lastName"
                                    label={"Last name"}
                                    star
                                    error={errors.lastName?.message}
                                    ref={register}/>

                    <RadioFieldGroup label={"Are you an Australian citizen?"}
                                     error={errors.isAustralianCitizen?.message} tooltip={<Tooltip>
                        <Text>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                        </Text>
                    </Tooltip>}>
                        <RadioField label={"Yes"} name={"isAustralianCitizen"} ref={register} value={"yes"}/>
                        <RadioField label={"No"} name={"isAustralianCitizen"} ref={register} value={"no"}/>
                    </RadioFieldGroup>

                    <SelectField name={"gender"}
                                 label={"Gender"}
                                 ref={register}
                                 error={errors.gender?.message}
                                 defaultOption={{value: "", label: "Please select an option"}}
                                 options={[{value: "male", label: "Male"}, {value: "female", label: "Female"}]}
                    />

                    <CheckboxField name={"isTermsAndConditionsAccepted"}
                                   ref={register}
                                   label={
                                       <Paragraph>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis
                                           rhoncus odio
                                           et ultricies. Donec urna urna, ultrices ac cursus eu, mattis sed nulla.
                                           Maecenas in ipsum
                                           id nibh euismod mattis sit amet a augue. Nunc efficitur nisi enim, non
                                           lacinia libero
                                           gravida ac. Suspendisse maximus felis arcu. Aenean eu tortor vitae lacus
                                           viverra laoreet
                                           vel in nunc. Vivamus vitae enim sit amet eros blandit commodo. Pellentesque a
                                           egestas
                                           nulla. Sed eleifend eleifend sollicitudin. Aliquam gravida sem vitae dolor
                                           finibus, ac
                                           convallis felis venenatis. Aliquam placerat accumsan quam in elementum. Duis
                                           hendrerit mi
                                           sit amet euismod tincidunt. Aliquam vitae arcu nec nunc pulvinar dictum non
                                           at velit.
                                           Fusce mauris lacus, varius non quam vel, elementum porttitor mi. Cras
                                           molestie ut augue
                                           ac venenatis.
                                       </Paragraph>}
                    />

                    <Button type={"submit"}>Login</Button>
                </Vertical>
            </form>
        </StoriesDefaultThemeProvider>
    );
};
