import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

export function Dashboard() {
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
        <TableRow>
          <TableCell className="font-medium">#1</TableCell>
          <TableCell>
            <img
              className="w-[2.5vw] rounded-full"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="avatar"
            />
          </TableCell>
          <TableCell>John</TableCell>
          <TableCell>Male</TableCell>
          <TableCell className="text-right">
            <img
              className="w-[2vw] cursor-pointer hover:opacity-50"
              src="delete.png"
              alt="delete"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
