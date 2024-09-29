import type { MouseEventHandler, PropsWithChildren } from "react";

import "./styles.css";

/**
 * If type is submit or reset, it is necessary to provide formId
 */
type ButtonProps = PropsWithChildren<{
  buttonProps?: object;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  srAnnouncement?: string;
  srLabel?: string;
  type?: "button" | "reset" | "submit";
  variant?: "primary" | "secondary" | "tertiary" | "danger";
}>;

const getButtonVariant = (variant: ButtonProps['variant']): string => {
  switch (variant) {
    case 'primary':
      return 'btn btn-primary';
    case 'secondary':
      return 'btn btn-outline-primary';
    case 'tertiary':
      return 'btn btn-light';
    case 'danger':
      return 'btn btn-danger';
    default:
      return 'btn btn-primary';
  };
};

export const Button = ({
  buttonProps,
  children,
  disabled = false,
  fullWidth = false,
  loading = false,
  onClick,
  srLabel,
  srAnnouncement = 'Carregando',
  type = "button",
  variant = "primary",
}: ButtonProps) => {

  const className = getButtonVariant(variant);

  return (
    <>
      {loading ?
        <button
          aria-label={srAnnouncement}
          className={fullWidth ? `${className} btn-fullWidth` : className}
          tabIndex={0}
          type={type}
          disabled
          {...buttonProps}
        >
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Carregando...
        </button>
        :
        <button
          aria-label={srLabel}
          disabled={disabled}
          className={fullWidth ? `${className} btn-fullWidth` : className}
          onClick={onClick}
          tabIndex={0}
          type={type}
          {...buttonProps}
        >
          {children}
        </button>
      }
    </>
  );
};
