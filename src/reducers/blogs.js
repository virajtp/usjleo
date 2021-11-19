import { FETCH_ALL_BLOGS, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (blogs = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS:
      return action.payload;
    case LIKE:
      return blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog));
    case CREATE:
      return [...blogs, action.payload];
    case UPDATE:
      return blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog));
    case DELETE:
      return blogs.filter((blog) => blog._id !== action.payload);
    default:
      return blogs;
  }
};

