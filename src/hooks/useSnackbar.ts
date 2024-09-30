import type { SnackbarBaseProps } from "../components/Snackbar";

import { useContext } from "react"
import { Toast as SnackbarBootstrap } from "bootstrap";

import { SnackbarContext } from "../context/snackbar";

export const useSnackbar = () => {
    const { snackbar, setSnackbar } = useContext(SnackbarContext);

    const snackbarElement = document.getElementById('snackbar');
    const snackbarInstance = SnackbarBootstrap.getOrCreateInstance(snackbarElement!);

    const handleShowSnackbar = (data: SnackbarBaseProps) => {
        setSnackbar({ ...data, open: true })
        snackbarInstance.show();
    }

    return {
        snackbar,
        setSnackbar: handleShowSnackbar,
    };
};
