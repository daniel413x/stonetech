/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { fetchBlog } from '../http/blogAPI';
import { ICommonArticleProps } from '../types/types';
import articles from '../utils/articles';
import BreadcrumbTrail from '../components/BreadcrumbTrail';

function ArticlePage() {
  const [content, setContent] = useState<ICommonArticleProps>();
  const [isBlog, setIsBlog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation().pathname.split(/\//).filter(Boolean);
  const subroute = location[0];
  const articleKey = location[location.length - 1];
  const { title: blogTitle } = useParams();
  useEffect(() => {
    (async () => {
      if (subroute === 'blog') {
        const fetchedBlog = await fetchBlog(blogTitle!, {
          attributes: [
            'body', ['createdAt', 'date'], 'thumbnail', 'title', 'snippet',
          ],
        });
        setContent(fetchedBlog);
        setIsBlog(true);
      } else {
        const article = articles[articleKey];
        setContent(article);
      }
      setLoading(false);
    })();
  }, []);
  if (!content || loading) {
    return null;
  }
  const {
    title,
    body,
    thumbnail,
    snippet,
  } = content;
  const breadcrumbTrails = location.slice();
  breadcrumbTrails[breadcrumbTrails.length - 1] = title;
  return (
    <div id="article-page">
      <div className="wrapper">
        <PageHeader
          header={title || ''}
          paragraph={snippet || ''}
        />
        <img
          src={isBlog ? `${process.env.REACT_APP_API_URL}${thumbnail}` : thumbnail}
          alt="Header"
          className="header-image"
        />
        <div className="body">
          {body?.map((str: string, i) => {
            if (/(\.jpe?g|\.png)$/.test(str)) {
              return (
                <img
                  src={isBlog ? `${process.env.REACT_APP_API_URL}${str}` : require(`../assets/${str}`)}
                  alt="Content"
                  key={str}
                />
              );
            }
            return (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`${str}${i}`}>
                {str}
              </p>
            );
          })}
        </div>
        <BreadcrumbTrail arr={breadcrumbTrails} />
      </div>
    </div>
  );
}

export default ArticlePage;
