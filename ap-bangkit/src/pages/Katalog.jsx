import React from "react";

const Katalog = () => {
  return (
    <section className="bg-yellow-100 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Katalog Produk</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-xl transform transition hover:scale-105 hover:shadow-yellow-500">
            <h3 className="font-semibold text-lg text-blue-900 mb-2">Obat Bebas</h3>
            <p className="text-gray-700">Obat tanpa resep untuk kebutuhan umum sehari-hari.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl transform transition hover:scale-105 hover:shadow-yellow-500">
            <h3 className="font-semibold text-lg text-blue-900 mb-2">Obat Resep</h3>
            <p className="text-gray-700">Obat dengan resep dokter sesuai kebutuhan pasien.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl transform transition hover:scale-105 hover:shadow-yellow-500">
            <h3 className="font-semibold text-lg text-blue-900 mb-2">Alat Kesehatan</h3>
            <p className="text-gray-700">Peralatan penunjang kesehatan dan kebutuhan medis lainnya.</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        Coming Soon
        
      </div>
      
    </section>
  );
};

export default Katalog;