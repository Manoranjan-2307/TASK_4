export const handleLogin = (email, password, navigate) => {
    if (email === "user@gmail.com" && password === "user") {
      navigate("/"); 
    } else if (email === "admin@gmail.com" && password === "admin") {
      navigate("/admin"); 
    } else {
      alert("Invalid credentials");
    }
  };
  