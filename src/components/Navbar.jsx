import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Himalayan Bliss</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:underline">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
