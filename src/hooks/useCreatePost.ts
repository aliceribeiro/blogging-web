import type { PostPayload } from "../api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postPost } from "../api";
import { useSnackbarContext } from "./useSnackbarContext";
import { Paths } from "../routes/paths";

export const useCreatePost = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { setSnackbar } = useSnackbarContext();

    const savePost = async ({ content, title }: PostPayload): Promise<any> => {
        setLoading(true);
        try {
            await postPost({ content, title })

            setSnackbar({
                closable: true,
                message: 'Publicação criada com sucesso.',
                variant: 'success'
            });

            navigate(Paths.BASE);
        } catch {
            setSnackbar({
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
