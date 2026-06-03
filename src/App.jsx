import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

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
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />{" "}
    </Provider>
  );
}

export default App;
