import { useEffect, useState } from "react";

import { UserProfiles } from "../model/enums/UserProfiles";

export const usePermission = () => {
    const [token, setToken] = useState('');
    const [userProfile, setUserProfile] = useState<UserProfiles | undefined>(undefined);

    const hasPermission = Boolean(token);

    useEffect(() => {
        const profile = window.localStorage.getItem('userProfile') as UserProfiles;
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
