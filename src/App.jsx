import Navbar from "./components/Navbar";
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
