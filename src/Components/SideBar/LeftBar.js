import React, { useEffect, useState } from 'react';
import logo from '../images/leologo.png';
// import { getBlogBar } from "../../actions/blogs";
import { useDispatch } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Blog from './Blog';
import Project from './Project';
// import useStyles from './styles';
import { useSelector } from 'react-redux';
import { getProjects } from "../../actions/projects"
import { getBlogPosts } from '../../actions/blogs';
// import { getBlogBar } from "./actions/blogs";
import { Link } from "react-router-dom";
import Modal from "../Projects_Blogs/PopupWindow/Modal";

const LeftBar = () => {
    const [currentId, setCurrentId] = useState(0);
    const blogs = useSelector((state) => state.blogs);
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    // const classes = useStyles();
    useEffect(() => {
        dispatch(getBlogPosts());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [img, setImg] = useState("");

    const [caption, setCaption] = useState("");

    return (
        <div className="leftbar" style={{ textAlign: 'center', alignContent: 'center' }}>
            <div id="logo"><img src={logo} width="50%" style={{ alignContent: 'center', paddingTop: '10%' }} /></div> <br />
            <h2>Recent Updates</h2>
            <div style={{ padding: "2%" }} className='blogcards' >
                <div className="sideCard">
                    <h3>Blogs</h3>
                    {blogs.slice(0, 2).map((blog) => (
                        <div className="singleBlog" onClick={() => { setModalOpen(true); setName(blog.title); setImg(blog.blogImage); setCaption(blog.caption); }}>
                            <Grid key={blog._id} item xs={12} sm={12} md={12}>
                                <div className="item-wrap">
                                    <div style={{ paddingBottom: "2%" }} className="blogcard" > <Blog blog={blog} setCurrentId={setCurrentId} /></div>
                                </div>
                            </Grid>
                        </div>
                    ))}
                    <br/>
                    <Link to="/Blogs"  style={{ color: window.location.pathname === '/Blogs' ? '#040640' : null }} >See All</Link>
                        
                </div>
                <br />
                <br />
                <div className="sideCard">

                    <h3>Projects</h3>
                    {posts.slice(0, 2).map((post) => (
                        <div className="singleBlog" onClick={() => { modalOpen === true ? setModalOpen(false) : setModalOpen(true); setModalOpen(true); setName(post.title); setImg(post.mainImg); setCaption(post.description); }}>
                            <Grid key={post._id} item xs={12} sm={12} md={12}>
                                <div className="item-wrap">
                                    <div style={{ paddingBottom: "2%" }} className="blogcard" > <Project post={post} setCurrentId={setCurrentId} /></div>
                                </div>
                            </Grid>
                          </div>
                    ))}
                    <br/>
                      <Link to="/Projects"  style={{ color: window.location.pathname === '/Projects' ? '#040640' : null , fontStyle:"null" }} >See All</Link>
                        
                    
                </div>
            </div>
            <br/>
            {modalOpen && <Modal setOpenModal={setModalOpen} name={name} image={img} caption={caption} />}

        </div>
    );
}

export default LeftBar;