import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Perhatikan: semua path folder gunakan huruf kecil konsisten
import Home from './Pages/HomePage';
import Katalog from './pages/Katalog';
import Contact from './pages/Contact';
import Order from './pages/Order';

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
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>

        {/* Footer bisa ditambahkan di sini jika universal */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
