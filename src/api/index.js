import axios from "axios"

const url = "http://localhost:5001"

export const fetchPosts = () => axios.get(`${url}/posts`)
export const addPost = (postData) => axios.post(`${url}/posts`, postData);
export const editPost = (id, postData) => axios.patch(`${url}/posts/${id}`, postData)
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`)

