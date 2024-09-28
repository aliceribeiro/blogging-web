export type SnackbarProps = {
    closable?: boolean;
    message?: string;
    variant?: 'info' | 'error' | 'success';
}

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

export const Snackbar = ({ closable = false, message, variant = 'info' }: SnackbarProps) => {
    const className = getVariant(variant);

    return (
        <div
            id="snackbar"
            className={`toast align-items-center border-0 ${className}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div className="d-flex">
                <div className="toast-body">
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
    );
};
