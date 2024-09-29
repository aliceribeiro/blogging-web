export const usePermission = () => {
    const token = window.localStorage.getItem('userToken');
    const hasPermission = Boolean(token);

    return {
        hasPermission,
        token,
    };
};
