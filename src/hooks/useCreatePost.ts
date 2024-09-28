import { useState } from "react";

import { useSnackbar } from "./useSnackbar";

type SavePostPayload = {
    description: string;
    title: string;
};

type UseCreatePostParams = {
    onSuccess: () => void;
};

export const useCreatePost = ({ onSuccess }: UseCreatePostParams) => {
    const [loading, setLoading] = useState(false);

    const { onShowSnackbar } = useSnackbar();

    const savePost = async ({ description, title }: SavePostPayload) => {
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

            onSuccess();
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
