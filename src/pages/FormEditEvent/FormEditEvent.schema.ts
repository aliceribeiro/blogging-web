import type { InferType as yupInferType } from "yup";
import {
    date as yupDate,
    object as yupObject,
    string as yupString
} from "yup";

import { UserProfiles } from "../../model/enums/UserProfiles";
import { getFormFields } from "../../utils/getFormFields";
import { MAX_CHAR_TITLE } from "../../utils/constants";

export const FormEditEventSchema = yupObject({
    endDate: yupDate().required('Campo obrigatório'),
    name: yupString()
        .required('Campo obrigatório')
        .test({
            name: 'maxCharacters',
            test: (value, ctx) => {
                if (value.length > MAX_CHAR_TITLE) {
                    return ctx.createError({ message: `O número máximo de caracteres é ${MAX_CHAR_TITLE}` })
                }

                return true
            }
        }),
    public: yupString().required('Campo obrigatório').oneOf(Object.values(UserProfiles)),
    startDate: yupDate().required('Campo obrigatório'),
}).required();

export type EditEventFormValues = yupInferType<typeof FormEditEventSchema>;

export const EditEventFormFields: EditEventFormValues = getFormFields(FormEditEventSchema.fields);