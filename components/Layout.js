import React from "react";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen">
        <div className="select-none">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
