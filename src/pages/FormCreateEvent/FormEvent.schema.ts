import type { InferType as yupInferType } from "yup";
import {
    date as yupDate,
    object as yupObject,
    string as yupString
} from "yup";

import { getFormFields } from "../../utils/getFormFields";
import { MAX_CHAR_CONTENT, MAX_CHAR_TITLE } from "../../utils/constants";

export const FormEventSchema = yupObject({
    description: yupString()
        .required('Campo obrigatório')
        .test({
            name: 'maxCharacters',
            test: (value, ctx) => {
                if (value.length > MAX_CHAR_CONTENT) {
                    return ctx.createError({ message: `O número máximo de caracteres é ${MAX_CHAR_CONTENT}` })
                }

                return true
            }
        }),
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
    startDate: yupDate().required('Campo obrigatório'),
}).required();

export type EventFormValues = yupInferType<typeof FormEventSchema>;

export const EventFormFields: EventFormValues = getFormFields(FormEventSchema.fields);