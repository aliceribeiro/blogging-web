import "./styles.css";

export type SnackbarBaseProps = {
    closable: boolean;
    message: string;
    variant: 'info' | 'error' | 'success';
};

export type SnackbarProps = SnackbarBaseProps & {
    open?: boolean;
};

const getVariant = (variant: SnackbarProps['variant']): string => {
    switch (variant) {
        case 'info':
            return 'bg-dark';
        case 'error':
            return 'bg-danger';
        case 'success':
            return 'bg-success';
        default:
            return 'bg-dark';
    };
};

export const Snackbar = ({ closable, message, open, variant }: SnackbarProps) => {
    const classNameVariant = getVariant(variant);
    // This is necessary due to first create instance call is not applying the proper class to show snackbar
    const className = open ? `show ${classNameVariant} ` : classNameVariant

    return (
        <div className="snackbar-wrapper">
            <div
                id="snackbar"
                className={`toast align-items-center border-0 position-fixed p-1 snackbar-container ${className}`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="d-flex snackbar-content">
                    <div className="toast-body text-light">
                        {message}
                    </div>
                    {closable && (
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Fechar mensagem"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
