import { Spinner } from '@/components/ui';
import type { IUserData } from '@/types';

export function UserCard({ user, isPending, error }: IUserData) {
  if (isPending) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner className="size-4" />
      </div>
    );
  }

  if (error) return <div className="ml-[1.2vw]">Sorry, name not founded...</div>;

  return (
    <ul>
      <li>id: {user?.id}</li>
      <li>name: {user?.name}</li>
      <li>status: {user?.status}</li>
      <li>gender: {user?.gender}</li>
    </ul>
  );
}
