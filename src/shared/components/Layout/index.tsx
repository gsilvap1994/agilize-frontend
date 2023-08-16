import React from "react";
import NavBar from "../Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <NavBar />
    <main className="p-4">{children}</main>
  </>
);

export default Layout;
