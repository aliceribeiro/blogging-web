import type { SnackbarProps } from "../components/Snackbar"

import { useState } from "react";

import { Toast as SnackbarBootstrap } from "bootstrap";


export const useSnackbar = () => {
    const [snackbarInfo, setSnackbarInfo] = useState<SnackbarProps | object>({})

    const snackbarElement = document.getElementById('snackbar');
    const snackbar = SnackbarBootstrap.getOrCreateInstance(snackbarElement!);

    const handleShowSnackbar = ({ closable = false, message, variant }: SnackbarProps) => {
        setSnackbarInfo({
            closable,
            message,
            variant,
        });

        setTimeout(() => {
            snackbar.show();
        }, 100);
    };

    return {
        onShowSnackbar: handleShowSnackbar,
        ...snackbarInfo
    };
};
