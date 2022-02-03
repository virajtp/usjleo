import React, {useState, useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProjects } from "../../actions/projects"

import Project from './Project';
import useStyles from './styles';
import Modal from "./PopupWindow/Modal";

const ProjectsView = ({ setCurrentId }) => {
 
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const [temp, setTemp] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [setCurrentId, dispatch]);

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  return (
    // 
    !posts.length ? <CircularProgress /> : (
    <div className="projectsview">
      <div ><h1> Projects </h1></div>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4}>
            <div className="singleProject" onClick={() => { setModalOpen(true); setName(post.title); setImg(post.mainImg);  setDescription(post.description); }}>
              <Project post={post} setCurrentId={setCurrentId} />
          </div>
          </Grid>
        ))}
      </Grid>
      {modalOpen && <Modal setOpenModal={setModalOpen} name={name} image={img} caption={description} />}
     </div>
    ) 
  );
};

export default ProjectsView;
