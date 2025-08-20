"use client"
//added navbar

import React, { useState, useEffect } from 'react';

export default function BlueNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-200">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-blue-600/95 to-purple-600/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-blue-500/20 shadow-2xl'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <a 
              href="#" 
              className="text-white text-3xl font-extrabold bg-gradient-to-r from-white to-blue-100 bg-clip-text cale-105 transition-transform duration-300"
            >
              YourLogo
            </a>
            

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative px-6 py-3 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden group ${
                      activeLink === link.id ? 'bg-white/20 shadow-md' : ''
                    }`}
                  >
                    zz
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1 p-2"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-18 right-0 w-80 h-screen bg-gradient-to-b from-blue-600 to-purple-600 backdrop-blur-md shadow-xl transition-transform duration-300 ${
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}>
          <ul className="p-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className="block text-white text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:bg-white/15 hover:translate-x-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Demo Content */}
      <div className="pt-18 px-6">
        <div className="max-w-6xl mx-auto py-12">
          <div className="bg-white rounded-2xl p-12 shadow-xl text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Welcome to Your Website
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-8">
              This is a demo section to show how your beautiful blue navbar looks with content. 
              The navbar is responsive, includes smooth animations, and features a modern gradient design.
            </p>
            
            <div className="space-y-8">
              {navLinks.map((link, index) => (
                <div key={link.id} id={link.id} className="py-16 border-b border-gray-100 last:border-b-0">
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">
                    {link.label} Section
                  </h2>
                  <p className="text-gray-600 text-lg">
                    This is the {link.label.toLowerCase()} section. Click the navigation links to see the active state change.
                    The navbar stays fixed at the top and includes beautiful hover effects and scroll animations.
                  </p>
                </div>
              ))}
              
              <div className="py-20 text-center">
                <div className="text-blue-600 text-2xl font-medium">
                  <p>Scroll to test the navbar behavior</p>
                  <p className="text-sm text-gray-500 mt-4">
                    The navbar changes opacity and adds blur effects when scrolling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}
