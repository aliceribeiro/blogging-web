import type { InferType as yupInferType } from "yup";
import { object as yupObject, string as yupString } from "yup";

import { getFormFields } from "../../utils/getFormFields";
import { MAX_CHAR_CONTENT, MAX_CHAR_TITLE } from "../../utils/constants";

export const FormPostSchema = yupObject({
    content: yupString()
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
    title: yupString()
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
}).required();

export type PostFormValues = yupInferType<typeof FormPostSchema>;

export const PostFormFields: PostFormValues = getFormFields(FormPostSchema.fields);