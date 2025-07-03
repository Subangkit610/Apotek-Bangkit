import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const metodePembayaranInfo = {
  VA: {
    label: "Virtual Account BCA",
    info: "8880 1234 5678 9012 a.n Apotek Bangkit",
  },
  TRANSFER: {
    label: "Transfer Bank",
    info: "123-456-7890 (BNI) a.n Apotek Bangkit",
  },
  DANA: {
    label: "DANA",
    info: "0812 3456 7890 a.n Apotek Bangkit",
  },
  OVO: {
    label: "OVO",
    info: "0813 9876 5432 a.n Apotek Bangkit",
  },
};

const generateRandomId = () => {
  return "TRX" + Math.floor(100000 + Math.random() * 900000);
};

const Transaksi = () => {
  const [cart, setCart] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState("VA");
  const [form, setForm] = useState({
    id: generateRandomId(),
    nama: "",
    alamat: "",
    wa: "",
    keterangan: "",
  });
  const [buktiPembayaran, setBuktiPembayaran] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const totalHarga = cart.reduce((acc, item) => acc + item.qty * item.harga, 0);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuktiChange = (e) => {
    const file = e.target.files[0];
    setBuktiPembayaran(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleBayar = (e) => {
    e.preventDefault();

    if (!form.nama || !form.alamat || !form.wa) {
      alert("Mohon lengkapi semua data pemesan.");
      return;
    }

    if (!buktiPembayaran) {
      alert("Mohon unggah bukti pembayaran.");
      return;
    }

    alert(`Transaksi berhasil!\nID: ${form.id}`);
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <section className="px-4 py-20 mt-20 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Transaksi Pembayaran</h2>
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">(Delivery Order Khusus Area Purworejo)</h2>
        <form onSubmit={handleBayar} className="space-y-6">
          {/* Form Identitas */}
          <div>
            <label className="block font-medium">ID Pemesan</label>
            <input
              type="text"
              name="id"
              value={form.id}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block font-medium">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Alamat Lengkap Penerima</label>
            <textarea
              name="alamat"
              rows="2"
              value={form.alamat}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium">No WhatsApp</label>
            <input
              type="text"
              name="wa"
              value={form.wa}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Keterangan Tambahan</label>
            <textarea
              name="keterangan"
              value={form.keterangan}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Metode Pembayaran */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Metode Pembayaran</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.keys(metodePembayaranInfo).map((method) => (
                <button
                  type="button"
                  key={method}
                  onClick={() => setSelectedMethod(method)}
                  className={`py-2 rounded-lg font-medium text-white ${
                    selectedMethod === method ? "bg-blue-700" : "bg-blue-400"
                  }`}
                >
                  {metodePembayaranInfo[method].label}
                </button>
              ))}
            </div>
            <div className="mt-3 text-sm text-gray-700 bg-blue-50 p-3 rounded-lg border">
              <strong>Info Pembayaran:</strong><br />
              {metodePembayaranInfo[selectedMethod].info}
            </div>
          </div>

          {/* Upload Bukti Pembayaran */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Upload Bukti Pembayaran
            </label>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 w-full sm:w-1/2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBuktiChange}
                  className="w-full"
                  required
                />
              </div>
              {previewUrl && (
                <div className="w-full sm:w-1/2">
                  <img
                    src={previewUrl}
                    alt="Preview Bukti"
                    className="w-full h-auto rounded shadow-md border"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Tabel Pesanan */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Detail Pesanan</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="px-4 py-2">Nama</th>
                    <th className="px-4 py-2">Qty</th>
                    <th className="px-4 py-2">Harga</th>
                    <th className="px-4 py-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="px-4 py-2">{item.nama}</td>
                      <td className="px-4 py-2">{item.qty}</td>
                      <td className="px-4 py-2">Rp {item.harga.toLocaleString()}</td>
                      <td className="px-4 py-2">Rp {(item.qty * item.harga).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right mt-4 text-xl font-bold text-blue-900">
                Total Bayar: Rp {totalHarga.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="text-right pt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Transaksi;
