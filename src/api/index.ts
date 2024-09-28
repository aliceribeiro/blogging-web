import { api } from "./config";

export type PostResponse = {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
};

const BASE_URL = '/posts';

export const getPostById = async (id: string | number): Promise<{ data: PostResponse }> =>
    await api.get(`${BASE_URL}/${id}`);

export const getPostByKeyWord = async (word: string): Promise<{ data: PostResponse[] }> =>
    await api.get(`${BASE_URL}/search?keyword=${word}`);

export const getPosts = async (): Promise<{ data: PostResponse[] }> =>
    await api.get(BASE_URL);
