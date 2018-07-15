import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://rduxblog.herokuapp.com/api';
const API_KEY = '?key=123asdfghj';

const SIMULATE_DATA_API = 'https://rawgit.com/CruiseAndy/8839ccf7faba5f12e93ee26d56680715/raw/458d590421d918d89173e80bbca1dca8371082f8/FormData.json';
const SIMULATE_SINGLE_DATA_API = 'https://rawgit.com/CruiseAndy/cc9dcc9bb9ab8ad19cd1e3d128e21936/raw/e0bc5f16d4e3aee1257623b69e3289e15200c8e3/FormSingleData.json';

export function fetchPosts() {
    // const request = axios.get(`${ROOT_URL}/post${API_KEY}`);
    const request = axios.get(SIMULATE_DATA_API);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
    console.log(request);

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    // const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    const request = axios.get(SIMULATE_SINGLE_DATA_API);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    }
}