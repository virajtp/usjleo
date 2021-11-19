import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector, Provider } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createBlogPost, updateBlogPost } from '../../actions/blogs';

const BlogForm = ({ currentId, setCurrentId }) => {
  const [BlogData, setBlogData] = useState({ title: '',caption: '',  writer: '', designer: '', tags: '', blogImage: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setBlogData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setBlogData({ title: '',caption: '',  writer: '', designer: '', tags: '', blogImage: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createBlogPost(BlogData));
      clear();
    } else {
      dispatch(updateBlogPost(currentId, BlogData));
      clear();
    }
  };

  return (
    
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Add Blog Post'}</Typography>
        {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={BlogData.creator} onChange={(e) => setBlogData({ ...BlogData, creator: e.target.value })} /> */}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={BlogData.title} onChange={(e) => setBlogData({ ...BlogData, title: e.target.value })} />
        <TextField name="caption" variant="outlined" label="Caption" fullWidth multiline rows={4} value={BlogData.caption} onChange={(e) => setBlogData({ ...BlogData, caption: e.target.value })} />
        <TextField name="writer" variant="outlined" label="Writer" fullWidth value={BlogData.writer} onChange={(e) => setBlogData({ ...BlogData, writer: e.target.value })} />
        <TextField name="designer" variant="outlined" label="Designer" fullWidth value={BlogData.designer} onChange={(e) => setBlogData({ ...BlogData, designer: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={BlogData.tags} onChange={(e) => setBlogData({ ...BlogData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setBlogData({ ...BlogData, blogImage: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    
  );
};

export default BlogForm;
