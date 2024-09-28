import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Paths } from "../routes/paths";

type LoginPayload = {
    password: string;
    username: string;
};

export const useLogin = () => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const loginUser = async ({ username, password }: LoginPayload) => {
        setLoading(true)
        try {
            // TODO: Send data to API and save user authorization 
            await new Promise((resolve) => {
                setTimeout(() => {
                    console.log({ username, password })
                    resolve(null)
                }, 500);
            });

            navigate(Paths.POSTS)
        } catch {
            // TODO: Error handler
            return
        } finally {
            setLoading(false)
        }
    };

    return {
        loading,
        loginUser,
    };
};