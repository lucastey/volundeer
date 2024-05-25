// app/components/layout.tsx
import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Head>
                <title>Volundeer</title>
                <meta name="description" content="Volundeer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="container mx-auto flex-1 p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
