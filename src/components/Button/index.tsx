import type { MouseEventHandler, PropsWithChildren } from "react";

import "./styles.css"

/**
 * If type is submit or reset, it is necessary to provide formId
 */
type ButtonProps = PropsWithChildren<{
  buttonProps?: object;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  srLabel?: string;
  type?: "button" | "reset" | "submit";
  variant?: "primary" | "secondary" | "tertiary" | "danger";
}>;

const getButtonVariant = (variant: ButtonProps['variant']): string => {
  switch (variant) {
    case 'primary':
      return 'btn btn-primary';
    case 'secondary':
      return 'btn btn-secondary';
    case 'tertiary':
      return 'btn btn-white';
    case 'danger':
      return 'btn btn-danger';
    default:
      return 'btn btn-primary';
  };
};

// TODO: Create loading state
export const Button = ({
  buttonProps,
  children,
  disabled = false,
  fullWidth = false,
  onClick,
  srLabel,
  type = "button",
  variant = "primary",
}: ButtonProps) => {

  const className = getButtonVariant(variant);

  return (
    <button
      aria-label={srLabel ?? String(children)}
      disabled={disabled}
      className={fullWidth ? `${className} btn-fullWidth` : className}
      onClick={onClick}
      tabIndex={0}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
