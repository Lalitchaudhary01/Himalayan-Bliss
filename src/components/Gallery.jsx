import React from "react";

function Gallery() {
  const images = [
    "https://img.veenaworld.com/wp-content/uploads/2018/06/Hadimba_Devi_Mandir.jpg", // Hadimba Temple, Manali
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6k9Yk78WNp1q62aNIUH4cKdOpVqef4vstA&s", // Solang Valley, Manali
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR9wy1_aG1k-jgo2zAw3oiR1NhiqhSywPvQ&s", // Manikaran Sahib, Kasol
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WVWwtoyLfQWpRxj9KfAia4Fh-OYUm4IhkA&s", // Kasol Village
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBw0tHhSJ7iXXfrM7taaqoqC9yf-ixy8epQ&s", // Mountain View, Manali
    "https://img.freepik.com/free-photo/nature-chalal-trek-trail-sosan-india_181624-29503.jpg?ga=GA1.1.807677743.1728565217&semt=ais_tags_boosted", // Parvati River, Kasol
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEprLX_2m_1pkzKlc6oiUj0wFO45Ctqjfvw&s", // Camping in Kasol
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpnfqioUBdQAp5_bCs91j6SYm4mwZqDNl1A&s", // Mall Road, Manali
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
