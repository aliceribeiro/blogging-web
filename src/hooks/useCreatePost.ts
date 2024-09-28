import { useState } from 'react';

type SavePostPayload = {
    description: string;
    title: string;
};

type UseCreatePostParams = {
    onSuccess: () => void;
}

export const useCreatePost = ({ onSuccess }: UseCreatePostParams) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const savePost = async ({ description, title }: SavePostPayload) => {
        setError(false);
        setLoading(true);
        try {
            // TODO: Send data to API
            await new Promise((resolve) => {
                setTimeout(() => {
                    console.log({ description, title })
                    resolve(null)
                }, 500);
            });

            onSuccess();
        } catch {
            setError(true);
            return
        } finally {
            setLoading(false)
        }
    };

    return {
        error,
        loading,
        savePost,
    };
};
