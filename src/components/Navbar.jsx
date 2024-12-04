import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:underline">
            Himalayan Bliss
          </Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://forms.gle/XEkcjgDHRAdV15qN9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Register
            </a>
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
