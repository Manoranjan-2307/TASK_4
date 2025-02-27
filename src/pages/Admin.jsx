import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

const adminData = [
  { title: "Active Users" },
  { title: "Total Users" },
  { title: "Courses" },
  { title: "User Achievements" },
  { title: "Total Purchases" },
];

const Admin = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          textAlign: "center",
          fontFamily: "Tahoma, sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          mt: 4,
        }}
      >
        Welcome Admin
      </Box>
      <Box sx={{ flexGrow: 1, p: 3, display: "flex", justifyContent: "center" }}>
        <Grid container spacing={3} sx={{ maxWidth: 600 }}>
          {adminData.map((item, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  height: "150px",
                  width: "100%",
                  border: "1px solid black",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": { backgroundColor: "#e0e0e0", transform: "scale(1.05)", transition: "0.3s" },
                }}
              >
                <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Typography variant="h6">{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Admin;
