export interface IUser {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export interface ICharacter {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: IUser[];
}

export interface IUserListProps {
  users: IUser[];
  nextPage: () => void;
  prevPage: () => void;
}
