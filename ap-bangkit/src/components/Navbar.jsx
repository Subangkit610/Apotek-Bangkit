import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = (path) =>
    `block py-2 px-4 hover:text-yellow-400 transition ${
      location.pathname === path ? 'text-yellow-400 font-semibold' : 'text-blue-900'
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/assets/logo-ap-bangkit.png" // path langsung dari folder public
            alt="Apotek Bangkit"
            className="w-14 h-14 object-contain"
          />
          <span className="text-blue-900 text-2xl font-bold">Apotek Bangkit</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className={navLinkStyle('/')}>Home</Link></li>
          <li><Link to="/about-us" className={navLinkStyle('/about-us')}>Tentang Kami</Link></li>
          <li><Link to="/katalog" className={navLinkStyle('/katalog')}>Katalog</Link></li>
          <li><Link to="/keranjang" className={navLinkStyle('/keranjang')}>Keranjang</Link></li>
          <li><Link to="/transaksi" className={navLinkStyle('/transaksi')}>Transaksi</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col py-2 px-4 space-y-2 text-lg">
            <li><Link to="/" className={navLinkStyle('/')} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/katalog" className={navLinkStyle('/katalog')} onClick={() => setIsOpen(false)}>Katalog</Link></li>
            <li><Link to="/contact" className={navLinkStyle('/contact')} onClick={() => setIsOpen(false)}>Kontak</Link></li>
            <li><Link to="/keranjang" className={navLinkStyle('/keranjang')} onClick={() => setIsOpen(false)}>Keranjang</Link></li>
            <li><Link to="/order" className={navLinkStyle('/order')} onClick={() => setIsOpen(false)}>Pesan</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
