import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

function UserList() {
  const { users, getUsers, removeUser, makeUserAdmin } =
    useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRemoveUser = (email) => {
    removeUser(email);
  };

  const handleMakeUserAdmin = (email) => {
    makeUserAdmin(email);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-2xl font-bold">User List</h1>
      <div className="w-full sm:w-2/3 lg:w-1/2">
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border py-2 px-4">Email</th>
              <th className="border py-2 px-4">Password</th>
              <th className="border py-2 px-4">User Role</th>
              <th className="border py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="bg-white text-gray-700">
                <td className="border py-2 px-4">{user.email}</td>
                <td className="border py-2 px-4">{user.password}</td>
                <td className="border py-2 px-4">{user.userRole}</td>
                <td className="border py-2 px-4">
                  <button
                    className="m-2 rounded bg-red-500 py-2 px-2 font-bold text-white"
                    onClick={() => handleRemoveUser(user.email)}
                  >
                    Delete
                  </button>
                  <button
                    className="rounded bg-green-500 py-2 px-2 font-bold text-white"
                    onClick={() => handleMakeUserAdmin(user.email)}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
