
import type { PropsWithChildren } from "react";
import type { SnackbarProps } from "../components/Snackbar"
import type { SnackbarContextState } from "./snackbar";

import { useMemo, useState } from "react";

import { SnackbarContext, DEFAULT_SNACKBAR_STATE } from "./snackbar";

type SnackbarProviderProps = PropsWithChildren

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
    const [snackbar, setSnackbar] = useState<SnackbarProps>(DEFAULT_SNACKBAR_STATE);

    const handleShowSnackbar = ({ closable = false, message, variant = 'info' }: SnackbarContextState) => {
        setSnackbar({
            closable,
            open: true,
            message,
            variant,
        });
    };

    const memoizedSnackbar = useMemo(() => ({
        snackbar,
        setSnackbar: handleShowSnackbar
    }), [snackbar, setSnackbar])

    return (
        <SnackbarContext.Provider value={memoizedSnackbar}>
            {children}
        </SnackbarContext.Provider>
    );
};
