import type { FormEventHandler, PropsWithChildren } from "react";
import type { UseFormReturn, FieldValues } from "react-hook-form";

import { FormProvider } from "react-hook-form";

type FormProps<T extends FieldValues> = PropsWithChildren<{
    id: string;
    methods: UseFormReturn<T>;
    onReset?: () => void;
    onSubmit: FormEventHandler<HTMLFormElement>;
}>

export const Form = <T extends FieldValues>({ children, id, methods, onReset, onSubmit }: FormProps<T>) => (
    <FormProvider {...methods}>
        <form id={id} onSubmit={onSubmit} onReset={onReset}>
            {children}
        </form>
    </FormProvider>
);
