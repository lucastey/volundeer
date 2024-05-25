import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Volundeer</title>
        <meta name="description" content="Volundeer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
