import { useState } from 'react';

import { deletePost as deletePostService } from "../api";
import { useSnackbarContext } from "./useSnackbarContext";

export const useDeletePost = (id: string | number) => {
    const [loading, setLoading] = useState(false);

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

            // TODO: Close modal and reload list
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
