import React from 'react';
import { NavLink } from 'react-router-dom';
import { IBlogPost } from '../../types/types';
import { blogDate } from '../../utils/functions';
import { BLOG_ROUTE, EDIT_ROUTE } from '../../utils/consts';

export type BlogCardProps = Omit<IBlogPost, 'body' | 'id'> & { employeeSection?: boolean };

function BlogCard({
  createdAt,
  title,
  snippet,
  thumbnail,
  employeeSection,
  slug,
}: BlogCardProps) {
  const formattedDate = blogDate(createdAt.toString());
  return (
    <NavLink className="blog-card" to={employeeSection ? `${EDIT_ROUTE}/${slug}` : `/${BLOG_ROUTE}/${slug}`}>
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
        {employeeSection ? 'Edit' : 'Read more'}
      </span>
    </NavLink>
  );
}

BlogCard.defaultProps = {
  employeeSection: false,
};

export default BlogCard;
