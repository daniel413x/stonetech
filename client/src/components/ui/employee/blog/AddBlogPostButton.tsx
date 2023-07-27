import React from 'react';
import { NavLink } from 'react-router-dom';
import addBlogPost from '../../../../assets/images/add-blog-post.jpg';
import { CREATE_ROUTE } from '../../../../utils/consts';
import { blogDate } from '../../../../utils/functions';

function AddBlogPostButton() {
  const formattedDate = blogDate(new Date().toString());
  return (
    <NavLink className="blog-card" to={`${CREATE_ROUTE}`}>
      <img alt="Add new blog post" src={addBlogPost} />
      <span className="date">
        {formattedDate}
      </span>
      <span className="title">
        New Blog Post
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu accumsan metus. At vero eos.
      </p>
      <span className="read-more">
        Create Blog Post
      </span>
    </NavLink>
  );
}

export default AddBlogPostButton;
