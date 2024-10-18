// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-4 bg-white shadow-md">
      <div className="logo">
        <img src="/logo.png" alt="Homey Logo" />
      </div>
      <nav className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">Accommodations</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Become a Host
        </button>
      </nav>
    </header>
  );
};

export default Header;
