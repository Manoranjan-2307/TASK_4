
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 4,
        pb: 2,
      }}
    >
      <Typography variant="body2" sx={{ color: "gray" }}>
        ENGLISH • SPANISH • FRENCH • GERMAN • ITALIAN • PORTUGUESE • DUTCH
      </Typography>
    </Box>
  );
};

export default Footer;
