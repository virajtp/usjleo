import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector, Provider } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createProject, updateProject } from '../../actions/projects';

const ProjecForm = ({ currentId, setCurrentId }) => {
  const [projectData, setProjectData] = useState({ chairPerson: '', title: '', secretary: '', treasurer: '', message: '', description: '', tags: '', mainImg: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setProjectData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setProjectData({ chairPerson: '', title: '',secretary: '',treasurer: '', message: '', description: '', tags: '', mainImg: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createProject(projectData));
      clear();
    } else {
      dispatch(updateProject(currentId, projectData));
      clear();
    }
  };

  return (
    
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Add Project'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={projectData.title} onChange={(e) => setProjectData({ ...projectData, title: e.target.value })} />
        <TextField name="chairPerson" variant="outlined" label="Chair Person" fullWidth value={projectData.chairPerson} onChange={(e) => setProjectData({ ...projectData, chairPerson: e.target.value })} />
        <TextField name="secretary" variant="outlined" label="Secretary" fullWidth value={projectData.secretary} onChange={(e) => setProjectData({ ...projectData, secretary: e.target.value })} />
        <TextField name="treasurer" variant="outlined" label="Treasurer" fullWidth value={projectData.treasurer} onChange={(e) => setProjectData({ ...projectData, treasurer: e.target.value })} />
        {/* <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={projectData.message} onChange={(e) => setProjectData({ ...projectData, message: e.target.value })} /> */}
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={projectData.description} onChange={(e) => setProjectData({ ...projectData, description: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={projectData.tags} onChange={(e) => setProjectData({ ...projectData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput} ><FileBase type="file" multiple={false} onDone={({ base64 }) => setProjectData({ ...projectData, mainImg: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    
  );
};

export default ProjecForm;
