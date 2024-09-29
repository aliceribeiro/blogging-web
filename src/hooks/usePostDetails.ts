import type { PostResponse } from "../api";

import { useCallback, useState } from "react";

import { getPostById } from "../api";

type RequestStatus = 'idle' | 'error' | 'loading' | 'success';

export const usePostDetails = (id: string | number) => {
    const [post, setPost] = useState<PostResponse | null>(null)
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle')

    const getPostDetails = useCallback(async () => {
        setRequestStatus('loading');
        try {
            const data = await getPostById(id);
            setPost(data);
            setRequestStatus('success');
        } catch {
            setRequestStatus('error');
        }
    }, [id]);

    return {
        getPostDetails,
        post,
        requestStatus,
    };
};
