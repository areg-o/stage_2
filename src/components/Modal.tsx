import { useQuery } from '@tanstack/react-query';
import { createPortal } from 'react-dom';

import { UserCard } from './UserCard';

import usersAPI from '@/api';
import type { ModalProps } from '@/types';

export function Modal({ isOpen, onClose, id }: ModalProps) {
  if (!isOpen) return null;

  const { data, error, isPending } = useQuery({
    queryKey: ['user', id],
    queryFn: () => usersAPI.getUser(id),
  });

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        <div className="modal-content text-gray-800">
          <UserCard user={data} error={error} isPending={isPending} />
        </div>
      </div>
    </div>,

    document.body,
  );
}
