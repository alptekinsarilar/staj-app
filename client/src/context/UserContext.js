import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch("/api/user/all-users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeUser = async (email) => {
    try {
      const res = await fetch(`/api/user/${email}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const makeUserAdmin = async (email) => {
    try {
      const res = await fetch(`/api/user/${email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userRole: "admin" }),
      });
      const data = await res.json();
      console.log(data);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ users, getUsers, removeUser, makeUserAdmin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
