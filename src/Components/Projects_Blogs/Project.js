import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeProject, deleteProject } from '../../actions/projects';
import useStyles from './style';
import ProjecForm from '../Form/ProjectForm';

const Project = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.mainImg || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      {/* <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div> */}
      {/* onClick={() => ProjecForm(post._id)} */}
      {/* onClick={() => setCurrentId(post._id)} */}
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)} ><MoreHorizIcon fontSize="default" /></Button>
      </div>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      {/* <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div> */}
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent> */}
      {/* <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" style={{backgroundColor:'rgba(75, 75, 75, 0.8)'}} onClick={() => dispatch(likeProject(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" style={{backgroundColor:'rgba(75, 75, 75, 0.8)'}} onClick={() => dispatch(deleteProject(post._id))}><ThumbUpAltIcon fontSize="small" /> Delete</Button>
      </CardActions> */}
    </Card>
  );
};

export default Project;
