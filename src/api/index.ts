import { api } from "./config";

type ApiResponse<T> = {
    data: T;
    message: string;
    statusCode: number;
};

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

export const deletePost = async (id: string | number, token: string): Promise<ApiResponse<string>> =>
    await api.delete(`${BASE_URL_POSTS}/${id}`, null, {
        headers: {
            'authorization': token,
        },
    });

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


export const postPost = async (token: string, data: PostPayload): Promise<ApiResponse<string>> =>
    await api.post<ApiResponse<string>>(BASE_URL_POSTS, data, {
        headers: {
            'authorization': token,
        },
    });

export const postLogin = async ({ username, password }: UserPayload): Promise<Token> => {
    const { data } = await api.post<ApiResponse<Token>>(`${BASE_URL_USERS}/login`, { username, password });
    return data.data;
};

export const putPost = async (id: string | number, token: string, data: PostPayload): Promise<ApiResponse<string>> =>
    await api.put<ApiResponse<string>>(`${BASE_URL_POSTS}/${id}`, data, {
        headers: {
            'authorization': token,
        },
    });
