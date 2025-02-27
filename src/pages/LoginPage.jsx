import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Box, TextField, Button, Typography } from "@mui/material";
import { handleLogin } from "../components/functionality.js"; 
import "../styles/login-page.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Box className="login-container">
        <Typography variant="h4" className="login-title">
          Welcome Back!
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          className="login-button"
          onClick={() => handleLogin(email, password, navigate)} 
        >
          LOGIN
        </Button>
      </Box>
    </div>
  );
};

export default LoginPage;
