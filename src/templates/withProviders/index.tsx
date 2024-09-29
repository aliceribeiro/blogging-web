/* eslint-disable react/display-name */
import type { ReactNode } from "react";

import { SnackbarProvider } from "../../context";

export const withProviders = (WrappedComponent: ReactNode) => {
    return () => {
        return (
            <SnackbarProvider>
                {WrappedComponent}
            </SnackbarProvider>
        );
    };
};
