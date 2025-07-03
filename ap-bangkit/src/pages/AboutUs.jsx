import React from "react";

const AboutUs = () => {
    return (
    <div className="mt-2">
      {/* Section Utama */}
      <section className="px-4 py-20 bg-gradient-to-br from-blue-50 to-white min-h-screen">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Tentang Kami</h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Apotek Bangkit</strong> adalah apotek modern yang berkomitmen menyediakan obat-obatan dan produk kesehatan yang aman, terjamin, dan terjangkau untuk masyarakat Indonesia. Berdiri sejak tahun <strong>2024</strong>, kami hadir untuk memberikan pelayanan terbaik dengan mengedepankan kenyamanan dan kemudahan akses, baik secara langsung maupun daring.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">Visi Kami</h2>
          <p className="text-gray-700 mb-6">
            Menjadi apotek terpercaya yang mendukung masyarakat sehat dan mandiri dengan pelayanan farmasi profesional dan berintegritas.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Misi Kami</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Menyediakan obat dan produk kesehatan yang legal, berkualitas, dan terjangkau.</li>
            <li>Memberikan edukasi dan konsultasi kesehatan yang tepat kepada pelanggan.</li>
            <li>Memanfaatkan teknologi untuk mempermudah layanan pemesanan dan pengiriman obat.</li>
            <li>Menjunjung tinggi etika dan profesionalisme dalam setiap layanan farmasi.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Informasi Kontak</h2>
          <p className="text-gray-700 mb-2"><strong>Alamat:</strong> Jl. Magelang km.4 Trirejo, Loano, Purworejo, Jawa Tengah</p>
          <p className="text-gray-700 mb-2"><strong>Telepon:</strong> 08529221160</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> apotekbangkit@gmail.com</p>
          <p className="text-gray-700"><strong>Instagram:</strong> @apotek.bangkit</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-semibold text-lg">Apotek Bangkit © {new Date().getFullYear()}</p>
          <p className="text-sm mt-1">Jl. Magelang km.4 Trirejo, Loano, Purworejo, Jawa Tengah</p>
          <p className="text-sm">Telepon: 085292211610 | Email: apotekbangkit@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};
export default AboutUs;
