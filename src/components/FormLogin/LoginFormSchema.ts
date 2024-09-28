import type { InferType as yupInferType } from "yup";
import { object as yupObject, string as yupString } from "yup";

import { getFormFields } from "../../utils/getFormFields";

export const FormLoginSchema = yupObject({
    username: yupString()
        .required('Campo obrigatório'),
    password: yupString()
        .required('Campo obrigatório')
}).required();

export type LoginFormValues = yupInferType<typeof FormLoginSchema>;

export const LoginFormFields: LoginFormValues = getFormFields(FormLoginSchema.fields);