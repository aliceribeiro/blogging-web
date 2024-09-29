/* eslint-disable @typescript-eslint/no-misused-promises */
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "..";
import { Button } from "../../../components/Button";
import { FormSearchSchema, SearchFormFields, SearchFormValues } from "./FormSearchSchema";

type BaseFormSearchProps = {
    placeholder?: string;
    srLabel: string;
}

type InputSearchProps = BaseFormSearchProps & {
    fieldName: string;
};

type FormSearchProps = BaseFormSearchProps & {
    disableButton?: boolean;
    id: string;
    onSubmit: (data: SearchFormValues) => Promise<void>;
};

const InputSearch = ({ fieldName, placeholder, srLabel }: InputSearchProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName });

    const hasError = Boolean(Object.keys(error ?? {}).length);

    return (
        <div className="flex-grow-1">
            <input
                id={fieldName}
                className={`form-control form-control-md ${hasError ? 'is-invalid' : ''}`}
                type="search"
                placeholder={placeholder}
                aria-label={srLabel}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export const FormSearch = ({
    disableButton = false,
    id,
    onSubmit,
    placeholder = '',
    srLabel
}: FormSearchProps) => {
    const methods = useForm<SearchFormValues>({
        defaultValues: {
            word: '',
        },
        resolver: yupResolver(FormSearchSchema)
    });

    const { formState: { errors }, handleSubmit } = methods;

    const hasError = Boolean(Object.keys(errors ?? {}).length);

    return (
        <Form id={id} methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex gap-1 mt-4">
                <InputSearch
                    fieldName={SearchFormFields.word}
                    placeholder={placeholder}
                    srLabel={srLabel}
                />
                <Button
                    size="sm"
                    variant="tertiary"
                    disabled={disableButton}
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    buttonProps={{
                        form: id
                    }}
                >
                    Buscar
                </Button>
            </div>
            {hasError && (
                <div className="invalid-feedback d-block">
                    {errors?.word?.message}
                </div>
            )}
        </Form>
    );
};
