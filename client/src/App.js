import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* import all components */
import Navbar from "./components/Navbar";

/* root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "*",
    element: <div>404 zibab vaj</div>,
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
