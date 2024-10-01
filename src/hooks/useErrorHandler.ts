/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { ApiResponseDataUnknown } from "../api";

import { useNavigate } from "react-router-dom";

import { useSnackbar } from "./useSnackbar";
import { Paths } from "../routes/paths";

export const useErrorHandler = () => {
    const navigate = useNavigate();
    const { setSnackbar } = useSnackbar();

    const errorHandler = (e: any, message: string) => {
        const { statusCode } = e?.response?.data as ApiResponseDataUnknown;

        if (statusCode == 401) {
            window.localStorage.removeItem('userToken');

            setSnackbar({
                closable: true,
                message: 'Permissão expirada. Por favor, faça o login novamente.',
                variant: 'error'
            });

            navigate(Paths.LOGIN);

            return;
        } else {
            setSnackbar({
                closable: true,
                message,
                variant: 'error'
            });
        };
    };

    return {
        errorHandler,
    };
};
