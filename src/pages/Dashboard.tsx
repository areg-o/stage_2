import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

import usersAPI from '@/api';
import { UserList } from '@/components';
import { Spinner } from '@/components/ui';
import { useDebounce, useSearch } from '@/hooks';

export function Dashboard() {
  const [page, setPage] = useState(1);

  const { searchText } = useSearch();
  const debouncedSearch = useDebounce<string>(searchText, 300);

  const { data, isPending, error, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['users', debouncedSearch],
      queryFn: ({ pageParam }) => usersAPI.getAllUsers(pageParam, debouncedSearch),
      getNextPageParam: (lastPage) => {
        const { next } = lastPage?.info || {};
        if (!next) return undefined;
        const page = new URL(next).searchParams.get('page');
        return Number(page);
      },
      initialPageParam: 1,
    });

  // const users = useMemo(() => data?.pages?.flatMap((page) => page.results) || [], [data]);

  const users = useMemo(() => {
    return data?.pages?.[page - 1]?.results || [];
  }, [data, page]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const nextPage = () => {
    if (!hasNextPage || isFetchingNextPage) return;
    const newPage = page + 1;
    setPage(newPage);
    if (!!data?.pages.length && data.pages.length < newPage) fetchNextPage();
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    );
  }

  if (error) return <div className="ml-[1.2vw]">Sorry, name not founded...</div>;

  return <UserList users={users} nextPage={nextPage} prevPage={prevPage} />;
}
