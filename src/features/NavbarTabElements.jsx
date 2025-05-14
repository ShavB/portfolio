import { Link } from "react-router";

export default function NavbarTabElements({ className }) {
  const tabName = [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
    {
      id: 2,
      label: "Blog",
      path: "/blog",
    },
    {
      id: 3,
      label: "Projects",
      path: "/projects",
    },
    {
      id: 4,
      label: "Misc",
      path: "/misc",
    },
  ];
  return (
    <div className={className}>
      {tabName.map((tab) => (
        <a
          href="#"
          className="block px-2 hover:bg-slate-800 rounded-2xl p-2"
          key={tab.id}
        >
          <Link to={tab.path}>{tab.label}</Link>
        </a>
      ))}
    </div>
  );
}
