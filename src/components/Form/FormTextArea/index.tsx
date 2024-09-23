import { useController } from "react-hook-form";

type FormTextAreaProps = {
    fieldName: string;
    label: string;
    placeholder?: string;
    srLabel: string;
}

// TODO: Add counter and not allow user to resize
export const FormTextArea = ({ fieldName, label, placeholder = '', srLabel }: FormTextAreaProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName });

    return (
        <div>
            <label htmlFor={fieldName} className="form-label">{label}</label>
            <textarea
                className="form-control"
                id={fieldName}
                aria-label={srLabel}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <div className="invalid-feedback">
                {error?.message}
            </div>
        </div>
    );
};