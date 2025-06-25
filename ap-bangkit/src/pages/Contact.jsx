import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-blue-900 text-white mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Hubungi Kami</h2>
        
        <div className="text-lg leading-relaxed space-y-3">
          <p>
            <strong>Apotek Bangkit</strong><br />
            Jl. Magelang, Km. 4, Desa Trirejo, RT 3 RW 3,<br />
            Kec. Loano, Kab. Purworejo
          </p>

          <p>
            <strong>No. HP:</strong> <a href="tel:085292211610" className="underline hover:text-yellow-300">0852-9221-1610</a>
          </p>

          <p>
            <strong>Email:</strong> <a href="mailto:bangkit.subenk@gmail.com" className="underline hover:text-yellow-300">bangkit.subenk@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
