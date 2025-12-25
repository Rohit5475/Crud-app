import API from "../services/api";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();

  const createUser = async (data) => {
    await API.post("/users", data);
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Add User</h2>
      <UserForm onSubmit={createUser} />
    </div>
  );
}
