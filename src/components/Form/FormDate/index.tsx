import { useController } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

type FormDateProps = {
    fieldName: string;
    form: string;
    label: string;
}

export const FormDate = ({ fieldName, form, label }: FormDateProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName });

    const hasError = Boolean(Object.keys(error ?? {}).length)

    return (
        <div className="form-date-container">
            <label htmlFor={fieldName} className="form-label">{label}</label>
            <DatePicker
                allowSameDay
                calendarIconClassName="form-date-icon"
                className={`form-control form-control-md form-date-input ${hasError ? 'is-invalid' : ''}`}
                form={form}
                onSelect={onChange}
                selected={value}
                showDateSelect
                showIcon
                showPreviousMonths={false}
                toggleCalendarOnIconClick
            />
            {hasError && (
                <div className="invalid-feedback d-block">
                    {error?.message}
                </div>
            )}
        </div>
    )
};