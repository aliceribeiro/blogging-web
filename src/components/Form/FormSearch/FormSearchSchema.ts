import type { InferType as yupInferType } from "yup";
import { object as yupObject, string as yupString } from "yup";

import { getFormFields } from "../../../utils/getFormFields";

export const FormSearchSchema = yupObject({
    word: yupString()
        .required('Campo obrigatório')
}).required();

export type SearchFormValues = yupInferType<typeof FormSearchSchema>;

export const SearchFormFields: SearchFormValues = getFormFields(FormSearchSchema.fields);