import React, { useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import List from './List';
import BlogCard from './BlogCard';
import PageControl from './PageControl';
import { BlogCard as BlogCardType } from '../../types/types';
import AddBlogPostButton from './employee/blog/AddBlogPostButton';
import { fetchBlogs } from '../../http/blogAPI';
import usePagination from '../../hooks/usePagination';
import Context from '../../context/context';

interface BlogsListProps {
  employeeSection?: boolean;
}

function BlogsList({
  employeeSection,
}: BlogsListProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<BlogCardType[]>([]);
  const [searchParams] = useSearchParams({});
  const page = Number(searchParams.get('page'));
  const { blog } = useContext(Context);
  const itemsPerPage = employeeSection ? 11 : 12;
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
        page,
      });
      const { rows, count } = fetchedBlogs;
      setCards(rows);
      blog.cacheBlogPageCards(rows, page);
      blog.setItemsInDb(count);
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    if (blog.cachedBlogPageCards[page]) {
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
    <div className="blog-list">
      <div className="wrapper">
        {loading ? null : (
          <List
            className="blog-ul"
            FirstItem={employeeSection ? <li><AddBlogPostButton /></li> : undefined}
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
                  employeeSection={employeeSection}
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

BlogsList.defaultProps = {
  employeeSection: false,
};

export default observer(BlogsList);
