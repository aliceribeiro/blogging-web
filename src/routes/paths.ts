export enum BasePaths {
  BASE = "/",
  LOGIN = "/login",
  POST_DETAILS = "/post",
  CREATE_POST = "/post/create",
  EDIT_POST = "/post/edit",
};

export const Paths = {
  BASE: BasePaths.BASE,
  LOGIN: BasePaths.LOGIN,
  POST_DETAILS: (id: string | number) => `${BasePaths.POST_DETAILS}/${id}`,
  CREATE_POST: BasePaths.CREATE_POST,
  EDIT_POST: (id: string | number) => `${BasePaths.EDIT_POST}/${id}`,
};
