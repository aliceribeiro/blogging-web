import type { PostResponse } from "../api";

import { useState } from 'react';

import { getPostByKeyWord } from "../api";
import { useSnackbarContext } from "./useSnackbarContext";

export const useSearchPost = () => {
    const { setSnackbar } = useSnackbarContext();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Array<PostResponse>>([]);

    const searchPost = async (word: string) => {
        setError(false);
        setLoading(true);
        try {
            const { data } = await getPostByKeyWord(word);
            setPosts(data);
        } catch {
            setSnackbar({
                closable: true,
                message: 'Ocorreu um erro. Por favor, tente novamente mais tarde.',
                variant: 'error'
            });
        } finally {
            setLoading(false);
        };
    };

    return {
        error,
        loading,
        posts,
        searchPost,
    };
};
