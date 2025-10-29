import { Spinner } from '../components/ui';

import usersAPI from '@/api';
import { UserList } from '@/components';
import { useGet } from '@/hooks';
import type { IUser } from '@/types';

export function Dashboard() {
  const { data, isPending, error } = useGet<IUser[]>(usersAPI.getUsers);

  if (isPending) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    );
  }

  if (error) return <div>{error.message}</div>;

  return <UserList users={data || []} />;
}
