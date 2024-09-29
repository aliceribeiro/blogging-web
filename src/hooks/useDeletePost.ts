import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { deletePost as deletePostService } from "../api";
import { useSnackbarContext } from "./useSnackbarContext";
import { Paths } from "../routes/paths";

export const useDeletePost = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { setSnackbar } = useSnackbarContext();

    const deletePost = async () => {
        setLoading(true);
        try {
            await deletePostService(id);

            setSnackbar({
                closable: true,
                message: 'Publicação excluída com sucesso.',
                variant: 'success'
            });

            navigate(Paths.BASE);
        } catch {
            setSnackbar({
                closable: true,
                message: 'Não foi possível excluir a publicação. Por favor, tente novamente mais tarde.',
                variant: 'error'
            });
        } finally {
            setLoading(false);
        };
    };

    return {
        loading,
        deletePost,
    };
};
