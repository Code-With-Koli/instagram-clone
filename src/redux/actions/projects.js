import * as api from '../../api'
import { FETCH_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from "./types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.fetchPosts();
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const addNewPost = (postData) => async (dispatch) => {
  try {
    const res = await api.addPOST(postData);
    dispatch({
      type: ADD_POST,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}
export const editPOST = (id, postData) => async (dispatch) => {
  try {
    const res = await api.editPost(id, postData)
    dispatch({
      type: EDIT_POST,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({
      type: DELETE_POST,
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
}
