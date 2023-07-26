import React from 'react';
import { NavLink } from 'react-router-dom';
import { BLOG_ROUTE } from '../../utils/consts';
import { IBlogPost } from '../../types/types';
import { blogDate, makeSlug } from '../../utils/functions';

type BlogCardProps = Omit<IBlogPost, 'body' | 'id'>;

function BlogCard({
  date,
  title,
  snippet,
  thumbnail,
}: BlogCardProps) {
  const slug = makeSlug(title);
  const formattedDate = blogDate(date.toString());
  return (
    <NavLink className="blog-card" to={`/${BLOG_ROUTE}/${slug}`}>
      <img alt={title} src={`${process.env.REACT_APP_API_URL}${thumbnail}`} />
      <span className="date">
        {formattedDate}
      </span>
      <span className="title">
        {title}
      </span>
      <p>
        {snippet}
      </p>
      <span className="read-more">
        Read more
      </span>
    </NavLink>
  );
}

export default BlogCard;
