import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

interface IRoute {
  id: number;
  title: string;
  path: string;
  component: JSX.Element;
}

const routes: IRoute[] = [
  { id: 1, title: "Home", path: "/", component: <Home /> },
  { id: 2, title: "About us", path: "/about-us", component: <AboutUs /> },
  { id: 3, title: "Services", path: "/services", component: <Services /> },
  { id: 4, title: "Projects", path: "/", component: <Home /> },
  { id: 5, title: "Resources", path: "/", component: <Home /> },
  { id: 6, title: "Contact Us", path: "/", component: <Home /> },
];

export const browserRoutes = routes.map((route) => {
  return { path: route.path, element: route.component };
});

export default routes;
