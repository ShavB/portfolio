import React from "react";

export default function NavbarTabElements({ className }) {
  const tabName = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Blog",
    },
    {
      id: 3,
      label: "Projects",
    },
    {
      id: 4,
      label: "Misc",
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
          {tab.label}
        </a>
      ))}
    </div>
  );
}
