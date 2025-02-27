
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        padding: "10px 20px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h5" sx={{ color: "#58CC02", fontWeight: "bold" }}>
          CodeStar
        </Typography>

        
        <Typography variant="body2" sx={{ color: "gray", cursor: "pointer" }}>
            SITE LANGUAGE: ENGLISH ▼
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
