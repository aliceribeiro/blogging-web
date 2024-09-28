import type { PostResponse } from "../api";

import { useState } from 'react';

import { getPosts } from "../api";

export const useListPosts = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [postsList, setPostsList] = useState<Array<PostResponse>>([])

    const getListPosts = async () => {
        setLoading(true)
        setError(false)

        try {
            const { data } = await getPosts();
            setPostsList(data);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        };
    };

    return {
        error,
        getListPosts,
        loading,
        postsList
    };
};