import type { PostResponse } from "../axios/api";

import { useState } from 'react';

import { getPostByKeyWord } from "../axios/api";

export const useSearchPost = () => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState<Array<PostResponse>>([])

    const searchPost = async (word: string) => {
        setLoading(true);

        try {
            const { data } = await getPostByKeyWord(word);
            setPost(data)
        } catch {
            // TODO: Add snackbar
        } finally {
            setLoading(false);
        };
    };

    return {
        loading,
        post,
        searchPost,
    };
};