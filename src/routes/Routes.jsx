import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/home/Home";
import Blog from "../components/pages/Blog";
import Projects from "../components/pages/Projects";
import Abouts from "../components/pages/about/Abouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <Abouts /> },
      { path: "/blog", element: <Blog /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);
