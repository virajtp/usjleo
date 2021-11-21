import axios from 'axios';

//const projectsURL = 'http://localhost:5000/projects';
//const blogsURL = 'http://localhost:5000/blogs';
const projectsURL = 'https://lcusj.herokuapp.com/projects';
const blogsURL = 'https://lcusj.herokuapp.com/blogs';


export const fetchProjects = () => axios.get(projectsURL);
export const createProject = (newProject) => axios.post(projectsURL, newProject);
export const likeProject = (id) => axios.patch(`${projectsURL}/${id}/likeProject`);
export const updateProject = (id, updatedProject) => axios.patch(`${projectsURL}/${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${projectsURL}/${id}`);

export const fetchBlogPosts = () => axios.get(blogsURL);
export const createBlogPost = (newBlogPost) => axios.post(blogsURL, newBlogPost);
export const likeBlogPost = (id) => axios.patch(`${blogsURL}/${id}/likeBlogPost`);
export const updateBlogPost = (id, updatedBlogPost) => axios.patch(`${blogsURL}/${id}`, updatedBlogPost);
export const deleteBlogPost = (id) => axios.delete(`${blogsURL}/${id}`);
