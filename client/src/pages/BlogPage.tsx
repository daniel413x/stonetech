import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { fetchBlog } from '../http/blogAPI';
import { IBlogPost } from '../types/types';

function BlogPage() {
  const [blog, setBlog] = useState<IBlogPost>();
  const [loading, setLoading] = useState<boolean>(true);
  const { title: blogTitle } = useParams();
  useEffect(() => {
    (async () => {
      if (blogTitle) {
        const fetchedBlog = await fetchBlog(blogTitle!, {
          attributes: [
            'body', ['createdAt', 'date'], 'thumbnail', 'title', 'snippet',
          ],
        });
        setBlog(fetchedBlog);
      }
      setLoading(false);
    })();
  }, []);
  let title;
  let body;
  let thumbnail;
  let snippet;
  if (blog) {
    ({
      title,
      body,
      thumbnail,
      snippet,
    } = blog);
  }
  return loading ? null : (
    <div id="generic-article">
      <div className="wrapper">
        <PageHeader
          header={title || ''}
          paragraph={snippet || ''}
        />
        <img
          src={`${process.env.REACT_APP_API_URL}${thumbnail}`}
          alt="Header"
          className="header-image"
        />
        <div className="body">
          {body?.map((str) => {
            if (/(\.jpe?g|\.png)$/.test(str)) {
              return (
                <img
                  src={`${process.env.REACT_APP_API_URL}${str}`}
                  alt="Content"
                />
              );
            }
            return (
              <p>
                {str}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
