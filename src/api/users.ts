import apiClient from '@/lib/apiClient';
import type { ICharacter, IUser } from '@/types';

const usersAPI = {
  async getUsers(): Promise<IUser[]> {
    const resp = await apiClient.get('character');
    return resp.data.results;
  },
  async getAllUsers(page: number): Promise<ICharacter> {
    const resp = await apiClient.get(`character/?page=${page}`);
    return resp.data;
  },
};

export default usersAPI;
