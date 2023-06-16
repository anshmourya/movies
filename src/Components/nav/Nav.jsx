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
        className="flex justify-between items-center p-5 absolute w-full z-10"
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

export default React.memo(Nav);
