import { useQuery } from '@tanstack/react-query';

import type { IUseGetProps } from '@/types';

export function useGet<T>(queryFn: IUseGetProps<T>) {
  const { data, isPending, error } = useQuery({
    queryKey: ['user'],
    queryFn: queryFn,
  });

  return { data, isPending, error };
}
