import React from "react";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Info Branding */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Apotek Bangkit</h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Apotek Bangkit. All rights reserved.
          </p>
        </div>

        {/* Media Sosial */}
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
