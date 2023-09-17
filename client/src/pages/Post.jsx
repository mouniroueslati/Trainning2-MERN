import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';

const Post = () => {
  let {id} = useParams();
  console.log(id);

const [post, setPost] = useState({});

useEffect(() => {
  const fetchPost = async () => {
    const {data} = await axios.get(`http://localhost:8080/${id}`);
    setPost(data);
  }
  fetchPost();
})

  return (
    <div className='post'>
      <Navbar/>
      <h1>{post.title}</h1>
      <h2>par {post.author} - {post.category}</h2>
      <p>{post.contenent}</p>
    </div>
  )
}

export default Post