import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ hours, contact, children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar />
        {children}
      </div>
      <Footer hours={hours} contact={contact} />
    </div>
  );
};

export default Layout;
