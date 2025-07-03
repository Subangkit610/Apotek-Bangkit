import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Perhatikan: semua path folder gunakan huruf kecil konsisten
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Katalog from './pages/Katalog';
import Keranjang from './pages/Keranjang';
import Transaksi from './pages/Transaksi';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        {/* Navbar tetap di atas */}
        <Navbar />

        {/* Konten Halaman */}
        <main className="flex-grow mt-16"> {/* mt-16 untuk beri ruang di bawah navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/keranjang" element={<Keranjang />} />
            <Route path="/transaksi" element={<Transaksi />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </main>

        {/* Footer bisa ditambahkan di sini jika universal */}
       <Footer />
      </div>
    </Router>
  );
}

export default App;
