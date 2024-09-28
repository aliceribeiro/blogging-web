// TODO: Ajustar essa regra
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "..";
import { FormSubmitButton } from "../FormSubmitButton";
import { FormSearchSchema, SearchFormFields, SearchFormValues } from "./FormSearchSchema";

import "./styles.css";

type BaseFormSearchProps = {
    label: string;
    placeholder?: string;
    srLabel: string;
}

type InputSearchProps = BaseFormSearchProps & {
    fieldName: string;
};

type FormSearchProps = BaseFormSearchProps & {
    id: string;
    onSubmit: (data: SearchFormValues) => Promise<void>;
};

const InputSearch = ({ fieldName, label, placeholder, srLabel }: InputSearchProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName });

    const hasError = Boolean(Object.keys(error ?? {}).length)

    return (
        <div className="search-input">
            <label htmlFor={fieldName} className="form-label">{label}</label>
            <input
                id={fieldName}
                className="form-control form-control-md"
                type="search"
                placeholder={placeholder}
                aria-label={srLabel}
                onChange={onChange}
                value={value}
            />
            {hasError && (
                <div className="invalid-feedback">
                    {error?.message}
                </div>
            )}
        </div>
    );
};

export const FormSearch = ({ id, label, onSubmit, placeholder = '', srLabel }: FormSearchProps) => {
    const methods = useForm<SearchFormValues>({
        defaultValues: {
            word: '',
        },
        resolver: yupResolver(FormSearchSchema)
    });

    const { handleSubmit } = methods;

    return (
        <Form id={id} methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="search-input-container">
                <InputSearch fieldName={SearchFormFields.word} label={label} placeholder={placeholder} srLabel={srLabel} />
                <FormSubmitButton
                    formId={id}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    Buscar
                </FormSubmitButton>
            </div>
        </Form>
    );
};
