import { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/user/all-users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

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
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="bg-white text-gray-700">
                <td className="border py-2 px-4">{user.email}</td>
                <td className="border py-2 px-4">{user.password}</td>
                <td className="border py-2 px-4">{user.userRole}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
