export const usePermission = () => {
    const token = `Bearer ${window.localStorage.getItem('userToken')}`;
    const hasPermission = Boolean(token);

    return {
        hasPermission,
        token,
    };
};
