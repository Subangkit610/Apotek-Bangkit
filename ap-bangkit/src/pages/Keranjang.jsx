import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan ini

const Keranjang = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Tambahkan ini

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalHarga = cart.reduce((acc, item) => acc + item.harga * item.qty, 0);

  const handleCheckout = () => {
    localStorage.setItem("checkoutTotal", totalHarga);
    navigate("/transaksi");
  };

  return (
    <section className="px-4 py-20 mt-20 bg-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Keranjang Belanja</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Keranjang Anda kosong.</p>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="px-4 py-2">Nama Obat</th>
                    <th className="px-4 py-2">Kemasan</th>
                    <th className="px-4 py-2">Dosis</th>
                    <th className="px-4 py-2">Qty</th>
                    <th className="px-4 py-2">Total</th>
                    <th className="px-4 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-t hover:bg-yellow-50">
                      <td className="px-4 py-2">{item.nama}</td>
                      <td className="px-4 py-2">{item.kemasan}</td>
                      <td className="px-4 py-2">{item.dosis}</td>
                      <td className="px-4 py-2">{item.qty}</td>
                      <td className="px-4 py-2">Rp {(item.qty * item.harga).toLocaleString()}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-600 hover:underline text-sm"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-right font-bold text-lg text-blue-900">
              Total Bayar: Rp {totalHarga.toLocaleString()}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Keranjang;
