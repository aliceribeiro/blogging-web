import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { deletePost as deletePostService } from "../api";
import { useSnackbarContext } from "./useSnackbarContext";
import { Paths } from "../routes/paths";
import { usePermission } from "./usePermission";

export const useDeletePost = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { token } = usePermission();
    const { setSnackbar } = useSnackbarContext();

    const deletePost = async () => {
        setLoading(true);
        try {
            await deletePostService(id, token!);

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
