import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserProvider } from "./context/UserContext";

/* import all components */
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Content from "./components/Content";
import ErrorPage from "./pages/ErrorPage";

/* root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Content />
      </>
    ),
    errorElement: (
      <>
        <ErrorPage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar />
        <Register />
      </>
    ),
  },
  {
    path: "users",
    element: (
      <>
        <Navbar />
        <UserProvider>
          <Users />
        </UserProvider>
      </>
    ),
  },
  {
    path: "*",
    element: <div>404 zibab vaj</div>,
  },
]);

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-4">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
