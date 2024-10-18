// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-100 text-center">
      <div className="footer-links flex flex-wrap justify-center gap-4 mb-4">
        <a href="#">Freeport</a>
        <a href="#">Nassau</a>
        <a href="#">New Providence</a>
      </div>
      <p>© 2023 Homey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
