/* eslint-disable */

import React, { useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import List from '../components/List';
import BlogCard from '../components/BlogCard';
import { fetchBlogs } from '../http/blogAPI';
import Context from '../context/context';
import PageControl from '../components/PageControl';
import usePagination from '../hooks/usePagination';
import { BlogCard as BlogCardType } from '../types/types';

function Blog() {
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<BlogCardType[]>([]);
  const [searchParams] = useSearchParams({});
  const page = Number(searchParams.get('page'));
  const { blog } = useContext(Context);
  const itemsPerPage = 12;
  const {
    pageLimit,
    pageLimitReached,
    changePage,
  } = usePagination({
    itemsPerPage,
    itemsInDb: blog.itemsInDb,
    concurrentlySetQuery: true,  
  });
  useEffect(() => {
    (async () => {
      const fetchedBlogs = await fetchBlogs({
        attributes: ['title', 'thumbnail', ['createdAt', 'date'], 'snippet'],
        limit: itemsPerPage,
      });
      const { rows, count } = fetchedBlogs;
      setCards(rows);
      blog.cacheBlogPageCards(rows, page);
      blog.setItemsInDb(count);
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    console.log(page);
    if (blog.cachedBlogPageCards[page]) {
      console.log('blog.cachedBlogPageCards[page]');
      setCards(blog.cachedBlogPageCards[page]);
      return;
    }
    (async () => {
      const fetchedBlogs = await fetchBlogs({
        attributes: ['title', 'thumbnail', ['createdAt', 'date'], 'snippet'],
        limit: itemsPerPage,
        page,
      });
      const { rows } = fetchedBlogs;
      setCards(rows);
      blog.cacheBlogPageCards(rows, page);
    })();
  }, [page]);
  return (
    <div id="blog">
      <div className="wrapper">
        <PageHeader
          header="Company blog"
          paragraph="Stonetech company news and articles about the industry and the particulars of architectural and interior design."
        />
        {loading ? null : (
          <List
            className="blog-ul"
            items={cards}
            renderAs={({
              title,
              date,
              thumbnail,
              snippet,
            }) => (
              <li key={title}>
                <BlogCard
                  title={title}
                  thumbnail={thumbnail}
                  date={date}
                  snippet={snippet}
                />
              </li>
            )}
          />
        )}
        {loading ? null : (
          <PageControl
            page={page || 1}
            pageLimit={pageLimit}
            pageLimitReached={pageLimitReached}
            changePage={changePage}
          />
        )}
      </div>
    </div>
  );
}

export default observer(Blog);
