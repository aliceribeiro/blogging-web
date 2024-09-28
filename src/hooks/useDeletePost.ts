import { useState } from 'react';

import { deletePost as deletePostService } from "../api";
import { useSnackbar } from "./useSnackbar";

export const useDeletePost = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const { onShowSnackbar } = useSnackbar();

    const deletePost = async () => {
        setLoading(true);
        try {
            await deletePostService(id);

            onShowSnackbar({
                closable: true,
                message: 'Publicação excluída com sucesso.',
                variant: 'success'
            });

            // TODO: Close modal and reload list
        } catch {
            onShowSnackbar({
                closable: true,
                message: 'Não foi possível excluir a publicação. Por favor, tente novamente mais tarde.s',
                variant: 'error'
            });
        } finally {
            setLoading(false)
        }
    };

    return {
        loading,
        deletePost,
    };
};

