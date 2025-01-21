import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/services", element: <Services /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
