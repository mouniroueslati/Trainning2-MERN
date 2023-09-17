import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';

const Add = () => {
  const[title, setTitle] = useState("");
  const[author, setAuthor] = useState("");
  const[category, setCategory] = useState("");
  const[content, setContent] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080", {title, author, category, content});
    setTitle("");
    setAuthor("");
    setCategory("");
    setContent("");
  };

  return (
    <div className='add'>
      <Navbar/>
      <form onSubmit={(e) => addPost(e)}>
        <input onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        value={title}
        />
        <input onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Auteur"
        value={author}
        />
        <input onChange={(e) => setCategory(e.target.value)}
        type="text" 
        placeholder="Catégorie"
        value={category}
        />
        <textarea 
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenu" 
        cols="30" 
        rows="10"
        value={content}
        ></textarea>
        <input type="submit" 
        value="Publier"/>

      </form>

    </div>
  )
}

export default Add