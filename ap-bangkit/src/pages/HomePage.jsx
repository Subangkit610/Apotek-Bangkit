import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[550px] overflow-hidden mt-1 bg-black">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/assets/video-apotek-bangkit.mp4"
            type="video/mp4"
          >
            Browser tidak mendukung video.
          </video>
        </div>

        {/* Konten di atas video */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            Bersama Kita Bangkit Menuju Sehat
          </h1>
          <p className="text-base md:text-lg max-w-3xl mb-6 drop-shadow-md">
            Apotek Bangkit hadir untuk memenuhi kebutuhan kesehatan Anda dengan
            pelayanan yang ramah, obat lengkap, dan harga terjangkau.
          </p>
          <Link
            to="/katalog"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full text-md transition duration-200"
          >
            Lihat Katalog
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white pt-10 pb-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Alamat */}
          <div>
            <h3 className="text-xl font-bold mb-4">Alamat Apotek Bangkit</h3>
            <p>
              Jl. Magelang Km.4, Desa Trirejo RT 3 RW 3, <br />
              Kec. Loano, Kab. Purworejo, Jawa Tengah <br />
              Telp/WA: 0852-9221-1610
            </p>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lokasi Kami</h3>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9109812612437!2d110.02091727409845!3d-7.794183677810595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aeb46c3e8dfcb%3A0xfdf6228a871d6fa!2sTrirejo%2C%20Loano%2C%20Purworejo!5e0!3m2!1sid!2sid!4v1719309340876!5m2!1sid!2sid"
              width="100%"
              height="180"
              allowFullScreen=""
              loading="lazy"
              className="rounded-md border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-6 mt-2">
              <a
                href="https://www.instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.youtube.com/@username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <Youtube size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-10 text-gray-300">
          &copy; {new Date().getFullYear()} Apotek Bangkit. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
