import type { UserPayload } from "../api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postLogin } from "../api";
import { useSnackbarContext } from "./useSnackbarContext";
import { Paths } from "../routes/paths";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { setSnackbar } = useSnackbarContext();

    const loginUser = async ({ username, password }: UserPayload) => {
        setLoading(true);
        try {
            const { token } = await postLogin({ username, password });
            window.localStorage.setItem('userToken', token);
            navigate(Paths.BASE);
        } catch {
            setSnackbar({
                closable: true,
                message: '"Não foi possível fazer login. Por favor, tente novamente mais tarde.',
                variant: 'error'
            });
        } finally {
            setLoading(false);
        };
    };

    return {
        loading,
        loginUser,
    };
};
