import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import UserForm from "../components/UserForm";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get(`/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const updateUser = async (data) => {
    await API.put(`/users/${id}`, data);
    navigate("/");
  };

  if (!user) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Edit User</h2>
      <UserForm initialData={user} onSubmit={updateUser} />
    </div>
  );
}
