import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/home/Home";
import Blog from "../components/Blog";
import Projects from "../components/Projects";
import Misc from "../components/Misc";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/projects", element: <Projects /> },
      { path: "/misc", element: <Misc /> },
    ],
  },
]);
