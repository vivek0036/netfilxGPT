import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Browse from "./components/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
