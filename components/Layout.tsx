import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  return (
    <Link 
      to={to} 
      className={`mr-4 font-semibold transition-colors ${isActive ? 'text-boundless-accent' : 'text-gray-600 hover:text-boundless-accent'}`}
    >
      {children}
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white py-5 border-b border-gray-200 sticky top-0 z-30 opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-5 max-w-[1000px]">
          <Link to="/" className="block group">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-boundless-accent group-hover:opacity-80 transition-opacity">
              Boundless Theory
            </h1>
          </Link>
          <p className="text-gray-600 mt-1.5 text-sm md:text-base">Exploring the universe through mathematics, physics, and imagination</p>
          <nav className="mt-4 flex flex-wrap gap-y-2">
            <NavLink to="/essays">Essays</NavLink>
            <NavLink to="/proofs">Proof Sketches</NavLink>
            <NavLink to="/combat">Math Combat</NavLink>
            <NavLink to="/aesthetics">Aesthetics</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-5 max-w-[1000px] py-8">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-12 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-5">
          <p>Made with curiosity and caffeine. © Harshith Vankela</p>
        </div>
      </footer>
    </div>
  );
};