import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import moreBlogsBg from '../../../assets/images/bg-generic-1.jpg';
import List from '../List';
import BlogCard from '../BlogCard';
import Context from '../../../context/context';
import { fetchBlogs } from '../../../http/blogAPI';

function MoreBlogsLink() {
  return (
    <div className="more-blogs-link">
      <img
        src={moreBlogsBg}
        alt="See more blogs"
      />
      <NavLink className="centered-link" to="blog">
        All blog entries
      </NavLink>
    </div>
  );
}

function OurBlog() {
  const { blog } = useContext(Context);
  useEffect(() => {
    const useCached = blog.cachedFrontPageCards.length === 2;
    if (useCached) {
      return;
    }
    (async () => {
      const fetchedBlogs = await fetchBlogs({
        limit: 2,
      });
      blog.cacheFrontPageCards(fetchedBlogs.rows);
    })();
  }, []);
  return (
    <div className="our-blog">
      <h2>
        Our blog
      </h2>
      <List
        LastItem={(
          <li key="more-blogs-link"><MoreBlogsLink /></li>
        )}
        items={blog.cachedFrontPageCards}
        renderAs={({
          createdAt,
          title,
          snippet,
          thumbnail,
          slug,
        }) => (
          <li key={title}>
            <BlogCard
              slug={slug}
              createdAt={createdAt}
              title={title}
              snippet={snippet}
              thumbnail={thumbnail}
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

export default observer(OurBlog);
