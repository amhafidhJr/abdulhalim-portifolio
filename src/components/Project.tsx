import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import Arrow from "@mui/icons-material/ArrowForward";

// Sample data
const cards = [
  {
    id: 1,
    title: "MjasiriHub",
    description: "Mobile Application",
    image:
      "https://pbs.twimg.com/profile_images/1138010883165212672/dQt_D4Le_400x400.jpg",
  },
  {
    id: 2,
    title: "Najah emarket",
    description: "Web Application",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKX-YC029eL06ZQpZyBDTfEKpg4sPmzEDsBg&s",
  },
  {
    id: 3,
    title: "Inventory MS",
    description: "Web Application",
    image:
      "https://st.depositphotos.com/1002927/1392/i/450/depositphotos_13927437-stock-illustration-check-pallet.jpg",
  },
  {
    id: 4,
    title: "Water Trucker",
    description: "Mobile Application",
    image:
      "https://i.pinimg.com/736x/5b/14/4d/5b144d0812d45d1ee3d21b16f2c35501.jpg",
  },
  {
    id: 5,
    title: "AfyaTel Application",
    description: "Mobile Application",
    image:
      "https://media.licdn.com/dms/image/C4D12AQFD7MrGSxtH3w/article-cover_image-shrink_600_2000/0/1615640906924?e=2147483647&v=beta&t=rzrU5WnMTsQZCw3rLLFm-hDJb6srAJYmB9QozK4mYq4",
  },
  {
    id: 6,
    title: "Laundry MS",
    description: "Web Application",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/353273028/FS/PR/MR/184325663/offsite-laundry-management-system-service-500x500.png",
  },
  // Add more cards as needed
];

const Project = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <Typography
            variant="h4"
            component="h4"
            align="left"
            gutterBottom
            sx={{ mb: 4, fontWeight: "bold" }}
          >
            Projects
          </Typography>

          <Box
            sx={{
              border: "0px solid #776B5D", // Corrected border style
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              margin: "auto",
              backgroundColor: "#F9F9F9",
              padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="h6" color="error">
                Click card to view Project
              </Typography>
              <Button
                variant="outlined"
                endIcon={<Arrow />}
                sx={{
                  border: "1px solid #776B5D",
                  color: "#776B5D",
                  borderRadius: "8px",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Responsive font size
                }}
                size="medium"
                className="mb-3"
              >
                View More
              </Button>
            </Box>
            <Slider {...settings}>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  sx={{
                    maxWidth: 300,
                    margin: "0 auto",
                    padding: 1,
                    // Responsive card width
                    width: { xs: "90%", sm: "80%", md: "100%" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200" // Fixed height to maintain aspect ratio
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Project;
