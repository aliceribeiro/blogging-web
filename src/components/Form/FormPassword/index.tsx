import { useController } from "react-hook-form";

type FormPasswordProps = {
    fieldName: string;
    label: string;
    placeholder?: string;
    srLabel: string;
}

export const FormPassword = ({ fieldName, label, placeholder = '', srLabel }: FormPasswordProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName });

    return (
        <div>
            <label htmlFor={fieldName} className="form-label">{label}</label>
            <input
                id={fieldName}
                className="form-control form-control-lg"
                type="password"
                placeholder={placeholder}
                aria-label={srLabel}
                onChange={onChange}
                value={value}
            />
            <div className="invalid-feedback">
                {error?.message}
            </div>
        </div>
    );
};