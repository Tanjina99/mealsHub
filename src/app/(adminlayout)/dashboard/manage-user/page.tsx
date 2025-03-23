import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ManageAllUsers = async () => {
  const res = await fetch("https://dorm-dine-hub-server.vercel.app/users", {
    cache: "no-store",
  });

  const { data: users } = await res.json();

  console.log(users);

  return (
    <div className="container mx-auto py-10">
      {/* <h1 className="text-2xl font-bold mb-6">Users</h1> */}
      <div className="rounded-md border">
        <Table>
          <TableCaption>List of registered users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>User Name</TableHead>
              <TableHead>UserEmail</TableHead>
              <TableHead>Satus</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.badge}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === "admin"
                        ? "bg-primary text-text-color"
                        : user.role === "user"
                        ? "bg-accent-foreground text-white"
                        : "bg-accent text-text-color"
                    }`}
                  >
                    {user.role === "admin" ? "Admin" : "Make Admin"}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllUsers;
