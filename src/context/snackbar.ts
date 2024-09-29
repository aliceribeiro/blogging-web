import type { SnackbarProps } from "../components/Snackbar";

import { createContext } from "react";

export const DEFAULT_SNACKBAR_STATE = {
    closable: true,
    message: '',
    open: false,
    variant: 'info' as SnackbarProps['variant'],
};

export type SnackbarContextState = {
    closable: boolean;
    message: string;
    open?: boolean;
    variant?: SnackbarProps['variant'];
};

export type SnackbarContextValue = {
    snackbar: SnackbarContextState;
    setSnackbar: (snackbar: SnackbarProps) => void;
};

export const SnackbarContext = createContext({
    snackbar: DEFAULT_SNACKBAR_STATE,
    setSnackbar: (snackbar: SnackbarContextState) => {
        if (!snackbar) {
            throw new Error('Misuse when calling snackbar.');
        }
    },
});
