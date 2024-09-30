import { useEffect } from "react";

import { Toast as SnackbarBootstrap } from "bootstrap";

import "./styles.css";

export type SnackbarProps = {
    closable: boolean;
    message: string;
    open: boolean;
    variant: 'info' | 'error' | 'success';
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

export const Snackbar = ({ closable, message, open, variant }: SnackbarProps) => {
    const className = getVariant(variant);

    const snackbarElement = document.getElementById('snackbar');
    const snackbar = SnackbarBootstrap.getOrCreateInstance(snackbarElement!);

    useEffect(() => {
        if (open) {
            snackbar.show();
        }
    }, [open]);

    return (
        <div className="snackbar-wrapper">
            <div
                id="snackbar"
                className={`toast align-items-center border-0 position-fixed p-1 snackbar-container ${className}`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-bs-autohide="false"
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
