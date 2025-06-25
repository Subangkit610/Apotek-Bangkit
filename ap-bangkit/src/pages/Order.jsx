import React, { useState } from 'react';

const Order = () => {
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [produkList, setProdukList] = useState([{ produk: '', qty: '' }]);

  const handleProdukChange = (index, field, value) => {
    const updatedList = [...produkList];
    updatedList[index][field] = value;
    setProdukList(updatedList);
  };

  const handleAddProduk = () => {
    setProdukList([...produkList, { produk: '', qty: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !alamat || produkList.some(p => !p.produk || !p.qty)) {
      alert('Mohon lengkapi semua kolom!');
      return;
    }

    const detailProduk = produkList
      .map((p, i) => `${i + 1}. ${p.produk} (Qty: ${p.qty})`)
      .join('\n');

    const pesan = `Halo, saya ingin memesan:\n\nNama: ${nama}\nAlamat: ${alamat}\n\nDaftar Produk:\n${detailProduk}`;
    const url = `https://wa.me/6285292211610?text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-yellow-50 mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
          Form Pemesanan
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-6"
        >
          <div>
            <label className="block text-blue-900 font-semibold mb-2">Nama Anda</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama lengkap"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div>
            <label className="block text-blue-900 font-semibold mb-2">Alamat Pengiriman</label>
            <textarea
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Tulis alamat lengkap"
              rows="4"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-blue-900 font-semibold mb-2">Daftar Produk</label>
            {produkList.map((item, index) => (
              <div key={index} className="flex items-center gap-4 mb-3">
                <input
                  type="text"
                  placeholder="Nama Obat / Produk"
                  value={item.produk}
                  onChange={(e) =>
                    handleProdukChange(index, 'produk', e.target.value)
                  }
                  className="flex-1 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <input
                  type="number"
                  placeholder="Qty"
                  value={item.qty}
                  onChange={(e) =>
                    handleProdukChange(index, 'qty', e.target.value)
                  }
                  className="w-24 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddProduk}
              className="mt-2 text-blue-900 font-medium hover:underline"
            >
              + Tambah Produk
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-semibold py-3 rounded transition duration-300"
          >
            Kirim Pesanan via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Order;
