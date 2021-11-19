import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_ALL_BLOGS } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPosts();
    console.log("dddddddd");

    dispatch({ type: FETCH_ALL_BLOGS, payload: data });
  } catch (error) {
    console.log("dddddddd");
    console.log(error.message);
  }
};

// export const getBlogBar = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchBlogPosts();
//     console.log("dddddddd");

//     dispatch({ type: FETCH_ALL_BLOGS, payload: data });
//   } catch (error) {
//     console.log("dddddddd");
//     console.log(error.message);
//   }
// };

export const createBlogPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createBlogPost(post);
    console.log("hiiiiiiiiiiiiiiiiiii");
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("huuuu");
    console.log(error.message);
  }
};

export const updateBlogPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateBlogPost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeBlogPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeBlogPost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBlogPost = (id) => async (dispatch) => {
  try {
    await api.deleteBlogPost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
