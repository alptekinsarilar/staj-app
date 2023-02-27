import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* import all components */
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";

/* root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
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
        <Users />
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
