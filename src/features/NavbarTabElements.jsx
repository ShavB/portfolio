import { forwardRef } from "react";
import { Link } from "react-router";
import { tabName } from "../utils/TabName";

const NavbarTabElements = forwardRef(({ className, handleMenuButton }, ref) => {
  return (
    <div ref={ref} className={className}>
      {tabName.map((tab) => (
        <div
          className="block h-full m-3 px-2 hover:border-b-2 rounded-1xl"
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
