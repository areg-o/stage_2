import apiClient from '@/lib/apiClient';
import type { ICharacter, IUser } from '@/types';

const usersAPI = {
  async getUser(id: number): Promise<IUser> {
    const resp = await apiClient.get(`character/${id}`);
    return resp.data;
  },
  async getAllUsers(page: number, name: string): Promise<ICharacter> {
    const query = name?.trim() ? `&name=${name}` : '';
    const resp = await apiClient.get(`character/?page=${page}${query}`);
    return resp.data;
  },
};

export default usersAPI;
