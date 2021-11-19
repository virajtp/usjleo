import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeBlogPost, deleteBlogPost } from '../../actions/blogs';
import useStyles from './style';

import Modal from "./PopupWindow/Modal";

const Blog = ({ blog, setCurrentId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [buttonPopup, setButtonPopup] = useState(false);
  const popupWindow = (e) => {
    setButtonPopup(e);
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={blog.blogImage || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={blog.title} />
      {/* <div className={classes.overlay}>
        <Typography variant="h6">{blog.creator}</Typography>
        <Typography variant="body2">{moment(blog.createdAt).fromNow()}</Typography>
      </div> */}
      {/* <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(blog._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div> */}
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{blog.title}</Typography>
      {/* <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{blog.tags.map((tag) => `#${tag} `)}</Typography>
      </div> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{blog.createdAt}</Typography>
      </CardContent>
      {/* <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" style={{backgroundColor:'rgba(75, 75, 75, 0.8)'}} onClick={() => dispatch(likeBlogPost(blog._id))}><ThumbUpAltIcon fontSize="small" /> Like {blog.likeCount} </Button>
        <Button size="small" color="primary" style={{backgroundColor:'rgba(75, 75, 75, 0.8)'}} onClick={() => dispatch(deleteBlogPost(blog._id))}><ThumbUpAltIcon fontSize="small" /> Delete</Button>
      </CardActions> */}
{/* <button onClick={()=>setButtonPopup(true)} >Open</button> */}

{/* <Popup trigger={buttonPopup} img={blog.blogImage} name={24} setTrigger={setButtonPopup}/> */}

        {/* <h3>Hiiiiiiiii</h3>
      </Popup> */}
    </Card>
  );
};

export default Blog;
