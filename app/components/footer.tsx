import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Name and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Name</h2>
          <p className="text-gray-400">
            A passionate developer crafting web experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-400 hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
