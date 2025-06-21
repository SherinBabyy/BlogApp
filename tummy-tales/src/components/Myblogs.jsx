// src/pages/MyBlogs.jsx
import React from 'react';
import '../styles/main.css'; // make sure your CSS file path matches

function MyBlogs() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <header>
        <div className="logo">Tummy Tales</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="/myblogs" className="active">My Blogs</a></li>
            <li><a href="/addblogs">Add Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>📌 My Blogs</h1>

        <section className="highlight-blog">
          <h2>🌟 My Special Blog</h2>
          <div className="blog-card special">
            <img
              src="https://th.bing.com/th/id/OIP.rY0mFsUjQfP_ySeGBUcrlQHaE7?rs=1&pid=ImgDetMain"
              alt="Special Blog"
            />
            <div className="content">
              <h2>My Mom’s Special MUTTON BIRIYANI</h2>
              <p className="date">Posted on: May 21, 2025</p>
              <p>
                This is not just a recipe, it’s a story of warmth, comfort, and
                tradition from my kitchen.
              </p>
              <div className="actions">
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>
        </section>

        <div className="blogs-container">
          <div className="blog-card">
            <img
              src="https://tensanz2000.files.wordpress.com/2015/12/noodles.jpg"
              alt="Noodles"
            />
            <div className="content">
              <h2>Street Style Noodles</h2>
              <p className="date">Posted on: May 19, 2025</p>
              <p>
                Hot and spicy noodles just like the ones from roadside stalls!
              </p>
              <div className="actions">
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="https://www.ihearteating.com/wp-content/uploads/2021/05/chocolate-cupcakes-7-1200-1027x1536.jpg"
              alt="Cupcakes"
            />
            <div className="content">
              <h2>Chocolate Cupcakes</h2>
              <p className="date">Posted on: May 20, 2025</p>
              <p>
                Sweet, soft, and full of chocolate joy – perfect for any party!
              </p>
              <div className="actions">
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyBlogs;