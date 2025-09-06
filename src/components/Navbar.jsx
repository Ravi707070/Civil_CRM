import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mt-3 flex items-center justify-between border mx-4 max-md:w-full border-slate-300 px-6 py-4 rounded-full bg-white shadow-md relative">
      {/* Brand Logo/Name */}
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-600">
          Civil Guruji CRM
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-7 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/leads" className="hover:text-blue-600 transition">Leads</Link>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium transition">
          Login
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 bg-white w-full flex flex-col items-center gap-4 text-base py-6 shadow-md">
          <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/leads" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Leads
          </Link>
          <a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
            About
          </a>
          
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium transition">
            Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
