import { api } from "./config";

export type PostPayload = {
    title: string;
    content: string;
};

export type PostResponse = {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
};

const BASE_URL = '/posts';

export const deletePost = async (id: string | number): Promise<{ data: any }> =>
    await api.delete(`${BASE_URL}/${id}`);

export const getPostById = async (id: string | number): Promise<{ data: PostResponse }> =>
    await api.get(`${BASE_URL}/${id}`);

export const getPostByKeyWord = async (word: string): Promise<{ data: PostResponse[] }> =>
    await api.get(`${BASE_URL}/search?keyword=${word}`);

export const getPosts = async (): Promise<{ data: PostResponse[] }> =>
    await api.get(BASE_URL);

export const postPost = async (data: PostPayload): Promise<{ data: any }> =>
    await api.post(BASE_URL, { data });


export const putPost = async (id: string | number, data: PostPayload): Promise<{ data: any }> =>
    await api.put(`${BASE_URL}/${id}`, { data });
