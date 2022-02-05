import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  Snackbar,
} from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";

const UserLogin = () => {
  // Estados iniciales de los campos
  const [userName, setUserName] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [openAlertRed, setOpenAlertRed] = useState(false);
  const navigate = useNavigate();

  //Evento para el boton de Sign Up - valida campos llenos, guarda en localStorage y activa alerta segun caso

  const buttonSubmit = (e) => {
    e.preventDefault();
    const valueLocalUser = window.localStorage.getItem("setUserName");
    const valueLocalToken = window.localStorage.getItem("setPasswordUser");

    if (!valueLocalUser && !valueLocalToken) {
      handleClickRed();
    } else if (
      valueLocalUser === userName &&
      valueLocalToken === passwordUser
    ) {
      navigate("/view-repositories");
    } else {
      handleClickRed();
    }
  };

  // tomando el valor del input email y cambiando el estado
  const valueinputEmail = (e) => {
    setUserName(e.target.value);
  };

  // tomando el valor del input password y cambiando el estado
  const valueinputPassword = (e) => {
    setPasswordUser(e.target.value);
  };

  // cambiando el estado de la alert para abrirla
  const handleClickRed = () => {
    setOpenAlertRed(true);
  };

  // cambiando el estado de la alert para cerrarla
  const handleCloseRed = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlertRed(false);
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
            value={userName}
            sx={{ width: "400px" }}
            onChange={valueinputEmail}
          />
          <TextField
            required
            id="passwordInput"
            label="Token Github"
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
          <Snackbar
            open={openAlertRed}
            autoHideDuration={4000}
            onClose={handleCloseRed}
          >
            <Alert
              onClose={handleCloseRed}
              severity="error"
              sx={{ width: "100%" }}
            >
              Por favor, llena los campos o verifica tu cuenta.
            </Alert>
          </Snackbar>
          <Typography
            variant="p"
            gutterBottom
            sx={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: "18px",
            }}
            component={Link}
            to={"/"}
          >
            ¿No tienes una Cuenta? Regístrate
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
export default UserLogin;
