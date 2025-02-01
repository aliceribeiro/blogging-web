import { useEffect, useState } from "react";

import { UserProfile } from "../api";

export const usePermission = () => {
    const [token, setToken] = useState('');
    const [userProfile, setUserProfile] = useState<UserProfile | undefined>(undefined);

    const hasPermission = Boolean(token);

    useEffect(() => {
        const profile = window.localStorage.getItem('userProfile') as UserProfile;
        const userToken = window.localStorage.getItem('userToken');

        if (profile) {
            setUserProfile(userProfile)
        }

        if (userToken) {
            setToken(`Bearer ${window.localStorage.getItem('userToken')}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        hasPermission,
        token,
        userProfile,
    };
};
