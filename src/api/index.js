import axios from 'axios';

// const url = 'http://localhost:5000/posts';
const url = '';
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// const URL = 'http://localhost:5000/userRoute'
const URL = "";

export const fetchUserDetails = () => axios.get(URL);
export const createUser= (newUser) => axios.post(URL, newUser);
export const updateUserDetails = (id, updateUserDetails) => axios.patch(`${URL}/${id}`, updateUserDetails);
export const deleteUserDetails = (id) => axios.delete(`${URL}/${id}`);