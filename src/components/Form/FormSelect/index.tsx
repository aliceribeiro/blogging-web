import { useController } from "react-hook-form";

type FormSelectProps = {
    fieldName: string;
    form: string;
    label: string;
    options: Array<{
        label: string;
        value: number | string
    }>;
    srLabel: string;
}

export const FormSelect = ({ fieldName, form, label, options, srLabel }: FormSelectProps) => {
    const {
        field: { onChange },
        fieldState: { error }
    } = useController({ name: fieldName });

    const hasError = Boolean(Object.keys(error ?? {}).length);

    return (
        <div>
            <label htmlFor={fieldName} className="form-label">{label}</label>
            <select className="form-select" aria-label={srLabel} form={form} onChange={onChange}>
                {options.map(({ label, value }, index) => (
                    <option key={`${value}-${index}`} onClick={onChange} value={value}>{label}</option>
                ))}
            </select>
            {hasError && (
                <div className="invalid-feedback d-block">
                    {error?.message}
                </div>
            )}
        </div>
    )
}