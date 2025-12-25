import { Link } from "react-router-dom";

export default function UserList({ users = [], onDelete }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 && (
          <tr>
            <td colSpan="3" className="p-4 text-center">
              No users found
            </td>
          </tr>
        )}

        {users.map((u) => (
          <tr key={u._id} className="text-center border">
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td className="space-x-2">
              <Link
                to={`/edit/${u._id}`}
                className="text-blue-600"
              >
                Edit
              </Link>
              <button
                onClick={() => onDelete(u._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
