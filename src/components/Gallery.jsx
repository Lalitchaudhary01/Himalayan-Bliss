import React from "react";
import { Grid, Box } from "@mui/material";

const Gallery = () => {
  const images = [
    "https://img.veenaworld.com/wp-content/uploads/2018/06/Hadimba_Devi_Mandir.jpg", // Hadimba Temple, Manali
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6k9Yk78WNp1q62aNIUH4cKdOpVqef4vstA&s", // Solang Valley, Manali
    "https://images.unsplash.com/photo-1621342797383-af042377a06c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmlrYXJhbnxlbnwwfHwwfHx8MA%3D%3D", // Manikaran Sahib, Kasol
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WVWwtoyLfQWpRxj9KfAia4Fh-OYUm4IhkA&s", // Kasol Village
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm06iAEVZUqSZlGy2pDpEz2Z4pM9GUv-AAOQ&s", // Mountain View, Manali
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZN31k02xJLMPN7IVHN7nux2FG1sq7NF6Iig&s", // Parvati River, Kasol
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEprLX_2m_1pkzKlc6oiUj0wFO45Ctqjfvw&s", // Camping in Kasol
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ibtYoVJg9HfneYOXTuWAqBRL4pdm_I5qDw&s", // Mall Road, Manali
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
                height: "200px", // Set a fixed height
                objectFit: "cover", // Crop the image to fit within the dimensions
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
