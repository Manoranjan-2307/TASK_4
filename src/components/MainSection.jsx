
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        The world knows many programming languages. Now you can too!
      </Typography>

      
      <Link to="/get-started" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#58CC02",
            color: "white",
            fontWeight: "bold",
            width: "250px",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#4CAF50",
            },
          }}
        >
          GET STARTED
        </Button>
      </Link>

      
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          sx={{
            width: "250px",
            borderRadius: "20px",
            color: "#1976D2",
            borderColor: "#1976D2",
            "&:hover": {
              backgroundColor: "#E3F2FD",
            },
          }}
        >
          I ALREADY HAVE AN ACCOUNT
        </Button>
      </Link>
    </Box>
  );
};

export default MainSection;
