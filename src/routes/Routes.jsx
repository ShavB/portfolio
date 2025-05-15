import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/home/Home";
import Blog from "../components/pages/Blog";
import Projects from "../components/pages/Projects";
import Misc from "../components/pages/Misc";
import About from "../components/pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/projects", element: <Projects /> },
      { path: "/misc", element: <Misc /> },
    ],
  },
]);
