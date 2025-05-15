import Navbar from "./components/pages/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
