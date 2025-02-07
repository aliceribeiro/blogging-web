export enum BasePaths {
  BASE = '/',
  CALENDAR = '/calendar',
  CREATE_EVENT = '/event/create',
  CREATE_POST = '/post/create',
  EDIT_EVENT = '/event/edit',
  EDIT_POST = '/post/edit',
  LOGIN = '/login',
  POST_DETAILS = '/post',
};

export const Paths = {
  BASE: BasePaths.BASE,
  CALENDAR: BasePaths.CALENDAR,
  CREATE_EVENT: BasePaths.CREATE_EVENT,
  CREATE_POST: BasePaths.CREATE_POST,
  EDIT_EVENT: (id: string | number) => `${BasePaths.EDIT_EVENT}/${id}`,
  EDIT_POST: (id: string | number) => `${BasePaths.EDIT_POST}/${id}`,
  LOGIN: BasePaths.LOGIN,
  POST_DETAILS: (id: string | number) => `${BasePaths.POST_DETAILS}/${id}`,
};
