import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes as applicationRoutes } from "./routes/routes";

const routes = createBrowserRouter(applicationRoutes);
const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
