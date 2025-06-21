// src/pages/AddBlog.jsx
import React from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';

function AddBlog() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <header>
        <div className="logo">Tummy Tales</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Recipes</a></li>
            <li><Link to="/myblogs">My Blogs</Link></li>
            <li><Link to="/addblogs" className="active">Add Blog</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Add New Blog</h1>
        <form className="add-blog-form">
          <label>
            Title: <input type="text" name="title" required />
          </label>
          <br /><br />
          <label>
            Image URL: <input type="text" name="image" />
          </label>
          <br /><br />
          <label>
            Description:<br />
            <textarea name="description" rows="5" required></textarea>
          </label>
          <br /><br />
          <button type="submit">Submit Blog</button>
        </form>
      </main>
    </div>
  );
}

export default AddBlog;