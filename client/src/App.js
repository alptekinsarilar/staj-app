import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* import all components */
import Navbar from "./components/Navbar";
import Content from "./components/Content";

/* root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <Content />
    </>,
  },
  {
    path: "*",
    element: <div>404 zibab vaj</div>,
  }
]);

const App = () => {
  return (
    <div className="min-h-screen py-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
