import React from "react";
import Logo from "../generalComponents/Logo";
import NavList from "./NavList";

const Nav = () => {
  const NavData = [
    { title: "Home", link: "/", id: 1 },
    { title: "User", link: "/", id: 2 },
    { title: "Logout", link: "/signin", id: 3 },
  ];

  return (
    <>
      <nav
        className="absolute z-10 flex items-center justify-between w-full p-5"
        style={{ background: "rgba(20, 20, 20, 0.5)" }}
      >
        <Logo width={"w-9"} />
        <NavList
          lists={NavData}
          ulClass={"flex justify-around flex-1"}
          liClass={"cursor-pointer"}
        />
      </nav>
    </>
  );
};

export default Nav;
