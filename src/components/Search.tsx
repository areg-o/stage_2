import type { ChangeEvent } from 'react';

import { Button, Input } from '@/components/ui';
import { useSearch } from '@/hooks';

export function Search() {
  const { searchText, setSearchText } = useSearch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex w-full items-start max-w-sm items-center gap-2 my-[2vh] pl-[1.2vw]">
      <Input
        value={searchText}
        onChange={handleChange}
        placeholder="Type character name"
        className="w-[50%]"
      />
      <Button
        onClick={(e) => e.preventDefault()}
        type="submit"
        aria-label="Search"
        className="cursor-pointer"
        variant="outline"
      >
        Search
      </Button>
    </div>
  );
}
