import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster />
    </div>
  );
};

export default Layout;