import type { PostResponse } from "../api";

import { useState } from 'react';

import { getPostByKeyWord } from "../api";

export const useSearchPost = () => {
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
            setError(true);
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
