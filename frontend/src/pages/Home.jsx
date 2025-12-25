import { useEffect, useState } from "react";
import API from "../services/api";
import UserList from "../components/UserList";

export default function Home() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await API.delete(`/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Users</h2>
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
}
