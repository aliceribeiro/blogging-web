import { api } from "./config";

type ApiResponse<T> = {
    data: T;
    message: string;
    statusCode: number;
};

type ApiResponseDataUnknown = ApiResponse<Record<string, unknown>>;

type Token = {
    token: string;
};

export type PostPayload = {
    title: string;
    content: string;
};

export type PostResponse = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
};

export type UserPayload = {
    username: string;
    password: string;
};

const BASE_URL_POSTS = '/posts';
const BASE_URL_USERS = '/users';

export const deletePost = async (id: string | number, token: string): Promise<ApiResponseDataUnknown> => {
    const { data } = await api.delete<ApiResponseDataUnknown>(`${BASE_URL_POSTS}/${id}`, {
        headers: {
            'authorization': token,
        },
    });

    return data
};

export const getPostById = async (id: string | number): Promise<PostResponse> => {
    const { data } = await api.get<ApiResponse<PostResponse>>(`${BASE_URL_POSTS}/${id}`);

    return data.data;
};

export const getPostByKeyWord = async (word: string): Promise<PostResponse[]> => {
    const { data } = await api.get<ApiResponse<PostResponse[]>>(`${BASE_URL_POSTS}/search?keyword=${word}`);
    return data.data;
};

export const getPosts = async (): Promise<PostResponse[]> => {
    const { data } = await api.get<ApiResponse<PostResponse[]>>(BASE_URL_POSTS);

    return data.data;
};

export const postPost = async (token: string, payload: PostPayload): Promise<ApiResponseDataUnknown> => {
    const { data } = await api.post<ApiResponseDataUnknown>(BASE_URL_POSTS, payload, {
        headers: {
            'authorization': token,
        },
    });

    return data;
};

export const postLogin = async (payload: UserPayload): Promise<Token> => {
    const { data } = await api.post<ApiResponse<Token>>(`${BASE_URL_USERS}/login`, payload);

    return data.data;
};

export const putPost = async (id: string | number, token: string, payload: PostPayload): Promise<ApiResponseDataUnknown> => {
    const { data } = await api.put<ApiResponseDataUnknown>(`${BASE_URL_POSTS}/${id}`, payload, {
        headers: {
            'authorization': token,
        },
    });

    return data;
};
