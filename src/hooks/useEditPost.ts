import type { PostPayload } from "../api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { putPost } from "../api";
import { useErrorHandler } from "./useErrorHandler";
import { usePermission } from "./usePermission";
import { useSnackbarContext } from "./useSnackbarContext";
import { Paths } from "../routes/paths";

export const useEditPost = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { errorHandler } = useErrorHandler();
    const { token } = usePermission();
    const { setSnackbar } = useSnackbarContext();

    const editPost = async (data: PostPayload) => {
        setLoading(true);
        try {
            await putPost(id, token, data);

            setSnackbar({
                closable: true,
                message: 'Publicação alterada com sucesso.',
                variant: 'success'
            });

            navigate(Paths.BASE);
        } catch (e: unknown) {
            errorHandler(e);

            setSnackbar({
                closable: true,
                message: 'Não foi possível salvar a edição. Por favor, tente novamente mais tarde.',
                variant: 'error'
            });
        } finally {
            setLoading(false);
        };
    };

    return {
        loading,
        editPost,
    };
};
