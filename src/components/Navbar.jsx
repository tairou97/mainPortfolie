import React from "react";

const Navbar = () => {
  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav>
      {nav.map((navItem) => (
        <a key={navItem.name} href={navItem.path}>
          {navItem.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
