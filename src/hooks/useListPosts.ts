import type { PostResponse } from "../api";

import { useState } from 'react';

import { getPosts } from "../api";

type RequestStatus = 'idle' | 'error' | 'loading' | 'success';

export const useListPosts = () => {
    const [postsList, setPostsList] = useState<Array<PostResponse>>([])
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle')

    const getListPosts = async () => {
        setRequestStatus('loading');
        try {
            const { data } = await getPosts();
            setPostsList(data);
            setRequestStatus('success');
        } catch {
            setRequestStatus('error');
        };
    };

    return {
        getListPosts,
        postsList,
        requestStatus,
    };
};
