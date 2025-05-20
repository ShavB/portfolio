import { forwardRef } from "react";
import { Link } from "react-router";
import { tabName } from "../utils/TabName";

const NavbarTabElements = forwardRef(({ className, handleMenuButton }, ref) => {
  return (
    <div ref={ref} className={className}>
      {tabName.map((tab) => (
        <div
          className="h-full m-3 px-2 hover:bg-gray-700 rounded-2xl p-2"
          key={tab.id}
          onClick={handleMenuButton}
        >
          <Link to={tab.path}>{tab.label}</Link>
        </div>
      ))}
    </div>
  );
});

export default NavbarTabElements;
