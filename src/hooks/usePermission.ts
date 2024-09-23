// TODO: Create authorization logic

export const usePermission = (profile: string) => {
    const hasPermission = profile === 'teacher';

    return {
        hasPermission,
    };
};