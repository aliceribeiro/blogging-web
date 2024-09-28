import type { InferType as yupInferType } from "yup";
import { object as yupObject, string as yupString } from "yup";

import { getFormFields } from "../../utils/getFormFields";

const MAX_CHAR_DESCRIPTION = 120;
const MAX_CHAR_TITLE = 80;

export const FormEditPostSchema = yupObject({
    content: yupString()
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
    title: yupString()
        .required('Campo obrigatório')
        .test({
            name: 'maxCharacters',
            test: (value, ctx) => {
                if (value.length > MAX_CHAR_DESCRIPTION) {
                    return ctx.createError({ message: `O número máximo de caracteres é ${MAX_CHAR_DESCRIPTION}` })
                }

                return true
            }
        }),
}).required();

export type EditPostFormValues = yupInferType<typeof FormEditPostSchema>;

export const EditPostFormFields: EditPostFormValues = getFormFields(FormEditPostSchema.fields);
