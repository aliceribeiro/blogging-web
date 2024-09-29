import { useController } from "react-hook-form";

type FormTextAreaProps = {
    fieldName: string;
    label: string;
    placeholder?: string;
    srLabel: string;
}

export const FormTextArea = ({ fieldName, label, placeholder = '', srLabel }: FormTextAreaProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName });

    const hasError = Boolean(Object.keys(error ?? {}).length);

    return (
        <div className="h-100">
            <label htmlFor={fieldName} className="form-label">{label}</label>
            <textarea
                className={`h-100 form-control form-control-md ${hasError ? 'is-invalid' : ''}`}
                id={fieldName}
                aria-label={srLabel}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {hasError && (
                <div className="invalid-feedback d-block">
                    {error?.message}
                </div>
            )}
        </div>
    );
};
