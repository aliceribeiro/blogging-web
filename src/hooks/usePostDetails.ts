import type { PostResponse } from "../api";

import { useCallback, useState } from "react";

import { getPostById } from "../api";

export const usePostDetails = (id: string | number) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState<PostResponse | null>(null)

    const getPostDetails = useCallback(async () => {
        setLoading(false);
        setError(false);
        try {
            const { data } = await getPostById(id);
            setPost(data);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        };
    }, [id]);

    return {
        error,
        getPostDetails,
        loading,
        post,
    };
};
