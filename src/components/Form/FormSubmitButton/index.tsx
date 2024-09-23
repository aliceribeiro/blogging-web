import type { MouseEventHandler, PropsWithChildren } from "react";

import { useFormContext } from "react-hook-form";

import { Button } from "../../Button";

type FormSubmitButton = PropsWithChildren<{
    disabled: boolean;
    formId: string;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
}>;

export const FormSubmitButton = ({ children, disabled: parentDisable, formId, onSubmit }: FormSubmitButton) => {
    const { formState: { errors } } = useFormContext();

    const hasError = Object.keys(errors).length > 0;
    const disabled = parentDisable || hasError;

    return (
        <Button
            buttonProps={{
                form: formId
            }}
            disabled={disabled}
            onClick={onSubmit}
            type="submit"
        >
            {children}
        </Button>
    );
};