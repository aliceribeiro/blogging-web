import { useState } from 'react';

import { deletePost as deletePostService } from "../api";

export const useDeletePost = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const deletePost = async () => {
        setLoading(true);
        try {
            await deletePostService(id);
        } catch {
            // TODO: Add snackbar
        } finally {
            setLoading(false)
        }
    };

    return {
        loading,
        deletePost,
    };
};
