import type { PostPayload } from "../api";

import { useState } from 'react';

import { putPost } from "../api";
import { useSnackbar } from "./useSnackbar";

export const useEditPost = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const { onShowSnackbar } = useSnackbar();

    const editPost = async (data: PostPayload) => {
        setLoading(true);
        try {
            await putPost(id, data)

            onShowSnackbar({
                closable: true,
                message: 'Publicação alterada com sucesso.',
                variant: 'success'
            });
        } catch {
            onShowSnackbar({
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
