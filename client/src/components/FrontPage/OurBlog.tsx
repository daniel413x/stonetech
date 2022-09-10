import React from 'react';
import { NavLink } from 'react-router-dom';
import { blogDate } from '../../utils/functions';
import blogImageOne from '../../assets/stairs-1.jpg';
import blogImageTwo from '../../assets/stairs-2.jpg';
import moreBlogsBg from '../../assets/bg-generic-1.jpg';
import List from '../List';

interface BlogProps {
  date: any;
  title: string;
  snippet: string;
  image: string;
  url: string;
}

function Blog({
  date,
  title,
  snippet,
  url,
  image,
}: BlogProps) {
  return (
    <div className="blog">
      <img alt={title} src={image} />
      <span className="date">
        {date}
      </span>
      <span className="title">
        {title}
      </span>
      <p className="paragraph">
        {snippet}
      </p>
      <NavLink className="read-more" to={url}>
        Read more
      </NavLink>
    </div>
  );
}

function MoreBlogsLink() {
  return (
    <div className="more-blogs-link">
      <img
        src={moreBlogsBg}
        alt=""
      />
      <NavLink className="centered-link" to="blog">
        All blog entries
      </NavLink>
    </div>
  );
}

function OurBlog() {
  const blogEntries = [
    {
      date: blogDate(new Date().toString()),
      image: blogImageOne,
      title: 'incredible work on these marble stairs',
      snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu accumsan metus. At vero eos.',
      url: '/',
    },
    {
      date: blogDate(new Date().toString()),
      image: blogImageTwo,
      title: 'Our work on a futuristic corporate interior',
      snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu accumsan metus. At vero eos.',
      url: '/',
    },
  ];
  return (
    <div className="our-blog">
      <h2>
        Our blog
      </h2>
      <List
        LastItem={(
          <li><MoreBlogsLink /></li>
        )}
        items={blogEntries}
        renderAs={({
          date,
          title,
          snippet,
          url,
          image,
        }) => (
          <li>
            <Blog
              date={date}
              title={title}
              snippet={snippet}
              url={url}
              image={image}
            />
          </li>
        )}
      />
      <div className="indicator">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default OurBlog;
