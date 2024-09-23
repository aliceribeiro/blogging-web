import type { MouseEventHandler, PropsWithChildren } from "react";

/**
 * If type is submit or reset, it is necessary to provide formId
*/
type ButtonProps = PropsWithChildren<{
    buttonProps?: object;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    srLabel?: string;
    type?: 'button' | 'reset' | 'submit';
    variant?: 'primary' | 'secondary';
}>;

// TODO: Create loading state and danger variant
export const Button = ({
    buttonProps,
    children,
    disabled = false,
    onClick,
    srLabel,
    type = 'button',
    variant = 'primary'
}: ButtonProps) => {
    const className = variant === 'primary' ?
        'btn btn-primary' :
        'btn btn-secondary'

    return (
        <button
            aria-label={srLabel ?? String(children)}
            disabled={disabled}
            className={className}
            onClick={onClick}
            tabIndex={0}
            type={type}
            {...buttonProps}
        >
            {children}
        </button>
    );
};
