import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy data produk
const dummyProducts = [
  { id: 1, nama: "Paracetamol", kemasan: "Strip 10 tablet", dosis: "500 mg", komposisi: "Paracetamol", deskripsi: "Obat penurun demam dan pereda nyeri.", harga: 8000 },
  { id: 2, nama: "Ibuprofen", kemasan: "Strip 10 kapsul", dosis: "400 mg", komposisi: "Ibuprofen", deskripsi: "Obat penurun demam dan pereda nyeri.", harga: 12000 },
  { id: 3, nama: "Antalgin", kemasan: "Strip 10 tablet", dosis: "500 mg", komposisi: "Metampiron", deskripsi: "Pereda nyeri dan sakit kepala.", harga: 9000 },
  { id: 4, nama: "Cetirizine", kemasan: "Strip 10 tablet", dosis: "10 mg", komposisi: "Cetirizine HCl", deskripsi: "Obat alergi dan antihistamin.", harga: 7000 },
  { id: 5, nama: "Mylanta", kemasan: "Botol 150ml", dosis: "Antasida", komposisi: "Aluminium Hydroxide, Magnesium Hydroxide", deskripsi: "Mengatasi maag dan asam lambung.", harga: 18000 },
  { id: 6, nama: "Tolak Angin", kemasan: "Sachet 15ml", dosis: "1 sachet", komposisi: "Herbal mix", deskripsi: "Jamu herbal untuk masuk angin.", harga: 5000 },
  { id: 7, nama: "Betadine", kemasan: "Botol 30ml", dosis: "Larutan antiseptik", komposisi: "Povidone-iodine", deskripsi: "Obat luar untuk luka.", harga: 16000 },
  { id: 8, nama: "Panadol Extra", kemasan: "Strip 10 tablet", dosis: "500 mg", komposisi: "Paracetamol, Caffeine", deskripsi: "Obat sakit kepala dan nyeri otot.", harga: 10000 },
  { id: 9, nama: "Neurobion", kemasan: "Strip 10 tablet", dosis: "Vitamin B kompleks", komposisi: "Vitamin B1, B6, B12", deskripsi: "Vitamin untuk saraf dan metabolisme.", harga: 15000 },
  { id: 10, nama: "Bodrex", kemasan: "Strip 10 tablet", dosis: "500 mg", komposisi: "Paracetamol, Caffeine", deskripsi: "Obat sakit kepala dan flu.", harga: 7000 },
  { id: 11, nama: "Promag", kemasan: "Strip 10 tablet", dosis: "Antasida", komposisi: "Magnesium Hydroxide, Aluminium Hydroxide", deskripsi: "Meredakan maag dan perut kembung.", harga: 6000 },
  { id: 12, nama: "Konidin", kemasan: "Strip 10 tablet", dosis: "-", komposisi: "Dextromethorphan, Chlorpheniramine", deskripsi: "Obat batuk dan flu.", harga: 8500 },
  { id: 13, nama: "Mixagrip", kemasan: "Strip 10 tablet", dosis: "-", komposisi: "Paracetamol, Phenylephrine", deskripsi: "Obat flu dan demam.", harga: 9500 },
  { id: 14, nama: "Vicks Formula 44", kemasan: "Botol 100ml", dosis: "-", komposisi: "Dextromethorphan", deskripsi: "Obat batuk kering.", harga: 19000 },
  { id: 15, nama: "OBH Combi", kemasan: "Botol 100ml", dosis: "-", komposisi: "Glycyrrhizae Radix, Menthol", deskripsi: "Obat batuk berdahak.", harga: 17000 },
  { id: 16, nama: "Enervon C", kemasan: "Strip 10 tablet", dosis: "-", komposisi: "Vitamin C, B Complex", deskripsi: "Suplemen untuk daya tahan tubuh.", harga: 13000 },
  { id: 17, nama: "Sangobion", kemasan: "Strip 10 kapsul", dosis: "-", komposisi: "Iron, Folic Acid", deskripsi: "Suplemen penambah darah.", harga: 14000 },
  { id: 18, nama: "Antangin", kemasan: "Sachet 15ml", dosis: "1 sachet", komposisi: "Herbal", deskripsi: "Mengatasi masuk angin dan lelah.", harga: 4500 },
  { id: 19, nama: "Minyak Kayu Putih", kemasan: "Botol 60ml", dosis: "-", komposisi: "Cajuput oil", deskripsi: "Penghangat dan penghilang gatal.", harga: 11000 },
  { id: 20, nama: "Minyak Telon", kemasan: "Botol 60ml", dosis: "-", komposisi: "Cajuput, Anise, Coconut oil", deskripsi: "Minyak bayi untuk kehangatan.", harga: 12000 },
];

const Katalog = () => {
  const [quantities, setQuantities] = useState(
    dummyProducts.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [notif, setNotif] = useState({}); // notifikasi per produk

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, prev[id] + delta);
      return { ...prev, [id]: newQty };
    });
  };

  const handleOrder = (product) => {
    const qty = quantities[product.id];
    const existing = cart.find((item) => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + qty } : item
      );
    } else {
      newCart = [...cart, { ...product, qty }];
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Set notifikasi hanya untuk produk itu
    setNotif((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setNotif((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const filteredProducts = dummyProducts.filter((product) =>
    product.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-4 py-20 mt-2 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900">Katalog Produk </h2>
          <h2 className="text-3xl font-bold text-yellow-500">(Delivery Khusus Area Purworejo) </h2>
          <Link
            to="/keranjang"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            Lihat Keranjang
          </Link>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Cari nama obat..."
          className="w-full max-w-md mb-8 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Produk Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-blue-400 transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800">{product.nama}</h3>
              <p className="text-sm text-gray-600 mt-1">ID: {product.id}</p>
              <p className="text-gray-700"><strong>Kemasan:</strong> {product.kemasan}</p>
              <p className="text-gray-700"><strong>Dosis:</strong> {product.dosis}</p>
              <p className="text-gray-700"><strong>Komposisi:</strong> {product.komposisi}</p>
              <p className="text-gray-600 text-sm mt-1">{product.deskripsi}</p>
              <p className="text-blue-700 font-semibold mt-2">Rp {product.harga.toLocaleString()} / kemasan</p>

              {/* Qty & Order */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQtyChange(product.id, -1)}
                    className="bg-yellow-300 px-2 rounded-full text-sm"
                  >
                    -
                  </button>
                  <span>{quantities[product.id]}</span>
                  <button
                    onClick={() => handleQtyChange(product.id, 1)}
                    className="bg-yellow-300 px-2 rounded-full text-sm"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleOrder(product)}
                  className="bg-blue-700 text-white px-4 py-1 rounded-lg hover:bg-blue-800 text-sm"
                >
                  Order
                </button>
              </div>

              {/* Notifikasi per item */}
              {notif[product.id] && (
                <p className="mt-3 text-sm text-green-600 font-medium">
                  ✅ Berhasil ditambahkan ke keranjang!
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Katalog;
