import type { PostPayload } from "../api";

import { useState } from 'react';

import { putPost } from "../api";

export const useEditPost = (id: string | number) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const editPost = async (data: PostPayload) => {
        setError(false);
        setLoading(true);
        try {
            await putPost(id, data)
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        };
    };

    return {
        error,
        loading,
        editPost,
    };
};
