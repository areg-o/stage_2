import { useState } from 'react';

import { Modal } from '@/components';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { useModal } from '@/hooks';
import type { IUserListProps } from '@/types';

export function UserList({ users, nextPage, prevPage }: IUserListProps) {
  const { isOpen, handleModal } = useModal();
  const [selectedUserId, setSelectedUserId] = useState(0);

  return (
    <div className="flex flex-col w-full h-full">
      <Table className="overflow-hidden">
        <TableCaption>A list of your characters.</TableCaption>
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
          {users?.map((user) => (
            <TableRow
              key={user.id}
              className="cursor-pointer"
              onClick={() => {
                handleModal();
                setSelectedUserId(user.id);
              }}
            >
              <TableCell className="font-medium">{user.id}.</TableCell>
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
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={prevPage}>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem onClick={nextPage}>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {selectedUserId > 0 && <Modal id={selectedUserId} onClose={handleModal} isOpen={isOpen} />}
    </div>
  );
}
