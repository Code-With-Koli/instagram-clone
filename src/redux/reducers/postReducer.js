import { FETCH_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from "../actions/types";


export default function (posts = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case ADD_POST:
      return [...posts, action.payload];
    case EDIT_POST:
      return posts.map(post => post.id === action.payload.id ? action.payload : post);
    case DELETE_POST:
      return posts.filter(post => post.id !== action.payload);
    default:
      return posts;
  }
}