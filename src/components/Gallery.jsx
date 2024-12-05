import React from "react";
import { Grid, Box } from "@mui/material";

const Gallery = () => {
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
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Gallery
      </h2>
      <Grid container spacing={3}>
        {images.map((src, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
