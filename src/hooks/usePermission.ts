import { useEffect, useState } from "react";

export const usePermission = () => {
    const [token, setToken] = useState('');
    const hasPermission = Boolean(token);

    useEffect(() => {
        const userToken = window.localStorage.getItem('userToken');
        if (userToken) {
            setToken(`Bearer ${window.localStorage.getItem('userToken')}`);
        } else {
            setToken('')
        };
    }, []);

    return {
        hasPermission,
        token,
    };
};
