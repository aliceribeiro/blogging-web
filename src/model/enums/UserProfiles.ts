export enum UserProfiles {
    ADM = 'ADM',
    PARENTS = 'PARENTS',
    PROFESSOR = 'PROFESSOR',
    STUDENT = 'STUDENT'
}

export const UserProfilesLabels: Record<UserProfiles, string> = {
    [UserProfiles.ADM]: 'Administrativo',
    [UserProfiles.PARENTS]: 'Tutores',
    [UserProfiles.PROFESSOR]: 'Docentes',
    [UserProfiles.STUDENT]: 'Discentes',
}