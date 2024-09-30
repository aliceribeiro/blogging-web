/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { ApiResponseDataUnknown } from "../api";

import { useNavigate } from "react-router-dom";

import { useSnackbarContext } from "./useSnackbarContext";
import { Paths } from "../routes/paths";

export const useErrorHandler = () => {
    const navigate = useNavigate();
    const { setSnackbar } = useSnackbarContext();

    const errorHandler = (e: any) => {
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
        };

        return e;
    }

    return {
        errorHandler,
    };
};
