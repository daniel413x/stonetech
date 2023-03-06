import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMaxPage } from '../utils/functions';

interface UsePaginationProps {
  itemsPerPage: number;
  itemsInDb: number;
  concurrentlySetQuery?: boolean;
}

interface UsePaginationReturn {
  page: number;
  pageLimit: number;
  pageLimitReached: boolean;
  changePage: (number: number) => void;
}

const usePagination = ({
  itemsPerPage,
  itemsInDb,
  concurrentlySetQuery,
}: UsePaginationProps): UsePaginationReturn => {
  const [searchParams, setSearchParams] = useSearchParams(concurrentlySetQuery ? { page: '1' } : {});
  const pageFromQuery = Number(searchParams.get('page')) || 1;
  const [page, setPage] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(1);
  const [pageLimitReached, setPageLimitReached] = useState<boolean>(false);
  const changePage = (number: number) => {
    if (number > pageLimit || number < 1) {
      return;
    }
    const newPage = number;
    setPage(newPage);
    if (concurrentlySetQuery) {
      setSearchParams({ page: number.toString() });
    }
  };
  useEffect(() => {
    if (page === pageLimit) {
      setPageLimitReached(true);
    } else {
      setPageLimitReached(false);
    }
  }, [page, pageLimit, pageFromQuery]);
  useEffect(() => {
    setPageLimit(getMaxPage(itemsInDb, itemsPerPage));
  }, [itemsInDb, itemsPerPage]);
  useEffect(() => { // accounts for back/forward browser buttons
    if (page !== pageFromQuery) {
      setPage(pageFromQuery);
    }
  }, [pageFromQuery]);
  return {
    page,
    pageLimit,
    pageLimitReached,
    changePage,
  };
};

export default usePagination;
