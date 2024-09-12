import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import {
  Calculate as CalculateIcon,
  Book as BookIcon,
  Science as ScienceIcon,
  Videocam as VideocamIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

export const Dashboard = () => {
  const cardData = [
    {
      title: "Posts",
      icon: <CalculateIcon fontSize="large" color="primary" />,
      color: "info",
      link: "/posts",
    },
    {
      title: "Messages",
      icon: <BookIcon fontSize="large" color="warning" />,
      color: "warning",
      link: "/messages",
    },
  ];

  return (
    <Container>
      <Box my={5}>
        <Typography
          sx={{
            marginTop: "100px",
          }}
          variant="h4"
          color="#776B5D"
        >
          <CalculateIcon />
          &nbsp;Dashboard
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={3}>
          {cardData.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card variant="outlined" color={item.color}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                      {item.icon}
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                      <Typography variant="h6">{item.title}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <IconButton
                    href={item.link}
                    color="primary"
                    sx={{ ml: "auto", display: "flex" }}
                  >
                    <ArrowForwardIcon />
                    View
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <footer style={{ textAlign: "center", marginTop: "2rem" }}>
        <Divider />
        <Typography variant="body2" color="textSecondary" gutterBottom>
          &copy; Company name 2015
        </Typography>
      </footer>
    </Container>
  );
};
