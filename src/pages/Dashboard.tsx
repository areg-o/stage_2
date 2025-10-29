import usersAPI from '@/api';
import { UserList } from '@/components';
import { Spinner } from '@/components/ui';
import { useGetAll } from '@/hooks';

export function Dashboard() {
  const { users, error, isPending, hasNextPage } = useGetAll({
    queryFn: usersAPI.getAllUsers,
    param: 1,
  });

  if (isPending) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    );
  }

  if (error) return <div>{error.message}</div>;

  return <UserList users={users || []} />;
}
