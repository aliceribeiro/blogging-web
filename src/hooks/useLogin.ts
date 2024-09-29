import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSnackbarContext } from "./useSnackbarContext";
import { Paths } from "../routes/paths";

type LoginPayload = {
    password: string;
    username: string;
};

export const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { setSnackbar } = useSnackbarContext();

    const loginUser = async ({ username, password }: LoginPayload) => {
        setLoading(true);
        try {
            // TODO: Send data to API and save user authorization 
            await new Promise((resolve) => {
                setTimeout(() => {
                    console.log({ username, password })
                    resolve(null)
                }, 500);
            });

            // TODO: Salvar info do usuário logado
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
