import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { browserRoutes } from "./routes";

const router = createBrowserRouter(browserRoutes);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
