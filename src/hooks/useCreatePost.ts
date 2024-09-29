import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSnackbar } from "./useSnackbar";
import { Paths } from "../routes/paths";

type SavePostPayload = {
    description: string;
    title: string;
};

export const useCreatePost = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { onShowSnackbar } = useSnackbar();

    const savePost = async ({ description, title }: SavePostPayload): Promise<any> => {
        setLoading(true);
        try {
            // TODO: Send data to API
            await new Promise((resolve) => {
                setTimeout(() => {
                    console.log({ description, title })
                    resolve(null)
                }, 500);
            });

            onShowSnackbar({
                closable: true,
                message: 'Publicação criada com sucesso.',
                variant: 'success'
            });

            navigate(Paths.BASE);
        } catch {
            onShowSnackbar({
                closable: true,
                message: 'Não foi possível salvar a publicação. Por favor, tente novamente mais tarde.',
                variant: 'error'
            });
        } finally {
            setLoading(false)
        }
    };

    return {
        loading,
        savePost,
    };
};
