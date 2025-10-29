import { type InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

import type { ICharacter, IUseGetAllProps } from '@/types';

export function useGetAll({ queryFn, param }: IUseGetAllProps) {
  const { data, hasNextPage, error, isPending } = useInfiniteQuery<
    ICharacter,
    Error,
    ICharacter,
    string[],
    number
  >({
    queryKey: ['users'],
    queryFn: ({ pageParam = param }) => queryFn(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.info.next) {
        const nextPage = Number(new URL(lastPage.info.next).searchParams.get('page'));
        return nextPage;
      }
      return null;
    },
    initialPageParam: param,
  });

  const users =
    (data as unknown as InfiniteData<ICharacter>)?.pages.flatMap((page) => page.results) ?? [];

  return {
    users,
    hasNextPage,
    error,
    isPending,
  };
}
