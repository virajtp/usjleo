import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getBlogPosts } from "../../actions/blogs";

import Blog from './Blog';
import useStyles from './styles';
import Modal from "./PopupWindow/Modal";




const BlogsView = ({ setCurrentId }) => {

  const blogs = useSelector((state) => state.blogs);
  const classes = useStyles();
  // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [setCurrentId, dispatch]);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  
  const [caption, setCaption] = useState("");


  return (
    // 
    !blogs.length ? <CircularProgress /> : (
      <div className="blogsview">
        <div ><h1> Blog </h1></div>


        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {blogs.map((blog) => (
            <Grid key={blog._id} item xs={12} sm={6} md={4}>
              <div className="singleBlog" onClick={() => { setModalOpen(true); setName(blog.title); setImg(blog.blogImage); setCaption(blog.caption); }}>
              <Blog blog={blog} setCurrentId={setCurrentId} />
              </div>
            </Grid>
          ))}
        </Grid>
        {modalOpen && <Modal setOpenModal={setModalOpen} name={name} image={img} caption={caption} />}
      </div>
    )
  );
};

export default BlogsView;
