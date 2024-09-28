import type { PostPayload } from "../api";

import { useState } from 'react';

import { putPost } from "../api";

export const useEditPost = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const editPost = async (data: PostPayload) => {
        setLoading(true);
        try {
            await putPost(id, data)
        } catch {
            // TODO: Show snackbar
            return;
        } finally {
            setLoading(false);
        };
    };

    return {
        loading,
        editPost,
    };
};
