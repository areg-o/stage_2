import { useQuery } from '@tanstack/react-query';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

import usersAPI from '@/api/users';

export function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: usersAPI.getUsers,
  });

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>#Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((user) => (
          <TableRow>
            <TableCell className="font-medium">#{user.id}</TableCell>
            <TableCell>
              <img className="w-[2.5vw] rounded-full" src={user.image} alt="avatar" />
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell className="text-right">
              <img
                className="w-[2vw] cursor-pointer hover:opacity-50"
                src="delete.png"
                alt="delete"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
