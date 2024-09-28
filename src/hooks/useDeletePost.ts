import { useState } from 'react';

import { deletePost as deletePostService } from "../api";

export const useDeletePost = (id: string | number) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const deletePost = async () => {
        setError(false);
        setLoading(true);
        try {
            await deletePostService(id);
        } catch {
            setError(true);
        } finally {
            setLoading(false)
        }
    };

    return {
        error,
        loading,
        deletePost,
    };
};
