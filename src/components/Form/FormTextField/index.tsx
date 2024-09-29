import { useController } from "react-hook-form";

type FormTextFieldProps = {
    fieldName: string;
    label: string;
    placeholder?: string;
    srLabel: string;
}

export const FormTextField = ({ fieldName, label, placeholder = '', srLabel }: FormTextFieldProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName });

    const hasError = Boolean(Object.keys(error ?? {}).length);

    return (
        <div>
            <label htmlFor={fieldName} className="form-label">{label}</label>
            <input
                id={fieldName}
                className={`form-control form-control-md ${hasError ? 'is-invalid' : ''}`}
                type="text"
                placeholder={placeholder}
                aria-label={srLabel}
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