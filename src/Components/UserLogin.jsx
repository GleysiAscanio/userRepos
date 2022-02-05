import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";

const UserLogin = () => {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  const buttonSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
    const valueLocal = window.localStorage.getItem("emailUser");
    console.log(valueLocal);
    if (valueLocal === emailUser) {
      console.log("Puedes Ingresar");
    } else {
      console.log("upss no estas registrado");
    }
  };

  const valueinputEmail = (e) => {
    setEmailUser(e.target.value);
    console.log("cambiando estado", emailUser);
  };
  const valueinputPassword = (e) => {
    setPasswordUser(e.target.value);
    console.log("cambiando estado", passwordUser);
  };

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 20,
        }}
        elevation={3}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              marginTop: 10,
            }}
          >
            Ingresa a tu Cuenta
            <GitHubIcon sx={{ width: 70, height: 70, marginLeft: 10 }} />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <TextField
            required
            id="userInput"
            label="Usuario GitHub"
            value={emailUser}
            sx={{ width: "400px" }}
            onChange={valueinputEmail}
          />
          <TextField
            required
            id="passwordInput"
            label="Password"
            value={passwordUser}
            type="password"
            autoComplete="current-password"
            sx={{ width: "400px", marginTop: 5 }}
            onChange={valueinputPassword}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              marginTop: 5,
              width: "200px",
            }}
            onClick={buttonSubmit}
          >
            Sing In
          </Button>
          <Typography
            variant="p"
            gutterBottom
            sx={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: "18px",
            }}
          >
            ¿No tienes una Cuenta? Regístrate
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
export default UserLogin;
