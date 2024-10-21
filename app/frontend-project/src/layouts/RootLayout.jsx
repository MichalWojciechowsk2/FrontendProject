import React from "react";
import menuItems from "../data/menu-items";
import NavBarMenu from "../components/NavBarMenu";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <NavBarMenu items={menuItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
