import React, { useState, useEffect } from 'react';

export default function NavbarSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`chrono-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          CELESTE<span>LUXE</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#shop">TIMEPIECES</a></li>
          <li><a href="#heritage">HERITAGE</a></li>
          <li><a href="#about">JOURNAL</a></li>
          <li><a href="#contact">BOUTIQUES</a></li>
        </ul>

        <div className="nav-icons">
          <button className="icon-btn">SEARCH</button>
          <div className="cart-wrapper">
            <button className="icon-btn">CART (0)</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chrono-nav {
          position: fixed; top: 0; width: 100%; padding: 35px 8%; z-index: 1000;
          transition: 0.5s; color: white; background: transparent;
        }
        .chrono-nav.scrolled {
          background: rgba(255, 255, 255, 0.98); color: #111; padding: 20px 8%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1400px; margin: 0 auto; }
        .logo { font-size: 1.6rem; letter-spacing: 8px; font-weight: 300; cursor: pointer; }
        .logo span { font-weight: 700; color: #c5a059; }
        .nav-links { display: flex; list-style: none; gap: 40px; }
        .nav-links a { 
          text-decoration: none; color: inherit; font-size: 0.75rem; 
          font-weight: 500; letter-spacing: 3px; position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; width: 0; height: 1px;
          bottom: -8px; left: 0; background: #c5a059; transition: 0.4s;
        }
        .nav-links a:hover::after { width: 100%; }
        .nav-icons { display: flex; gap: 30px; }
        .icon-btn { 
          background: none; border: none; color: inherit; 
          font-size: 0.75rem; cursor: pointer; letter-spacing: 2px; font-weight: 600;
        }
        @media screen and (max-width: 1024px) { .nav-links { display: none; } }
      `}</style>
    </nav>
  );
}