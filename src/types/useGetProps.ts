import type { ICharacter } from './user';

export interface IUseGetProps<T> {
  (): Promise<T>;
}

export interface IUseGetAllProps {
  queryFn: (page: number) => Promise<ICharacter>;
  param: number;
}
