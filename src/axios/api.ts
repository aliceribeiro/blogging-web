import axios from "axios";

// TODO: Add env variable with URL
const URL = 'http://localhost:3001'

const api = axios.create({
    baseURL: URL
})

export type PostResponse = {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
}

export const getPostByKeyWord = async (word: string): Promise<{ data: PostResponse[] }> =>
    await api.get(`/posts/search?keyword=${word}`)

export const getPosts = async (): Promise<{ data: PostResponse[] }> =>
    await api.get('/posts')

// TODO: Remove
export default api;

// TODO: Rename folder
