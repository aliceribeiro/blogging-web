import { useEffect, useState } from "react";

import { UserProfile } from "../api";

export const usePermission = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [token, setToken] = useState('');

    const hasPermission = Boolean(token);

    useEffect(() => {
        const userProfile = window.localStorage.getItem('userProfile') as UserProfile;
        const userToken = window.localStorage.getItem('userToken');

        if (userToken) {
            setToken(`Bearer ${window.localStorage.getItem('userToken')}`);
        }

        if (userProfile) {
            setProfile(userProfile)
        }
    }, []);

    return {
        hasPermission,
        profile,
        token,
    };
};
