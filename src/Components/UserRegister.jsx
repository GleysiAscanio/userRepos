import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const UserRegister = () => {
  // Estados iniciales de los campos y los alerts
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [openAlertGreen, setOpenAlertGreen] = useState(false);
  const [openAlertRed, setOpenAlertRed] = useState(false);

  //Evento para el boton de Sign Up - valida campos llenos, guarda en localStorage y activa alerta segun caso
  const buttonSubmit = (e, setEmailUser, setPasswordUser) => {
    e.preventDefault();
    if (emailUser === "" && passwordUser === "") {
      handleClickRed();
    } else {
      window.localStorage.setItem("setEmailUser", setEmailUser);
      window.localStorage.setItem("setPasswordUser", setPasswordUser);
      handleClickGreen();
    }
  };

  // tomando el valor del input email y cambiando el estado
  const valueinputEmail = (e) => {
    setEmailUser(e.target.value);
  };

  // tomando el valor del input password y cambiando el estado
  const valueinputPassword = (e) => {
    setPasswordUser(e.target.value);
  };

  // cambiando el estado de la alert para abrirla
  const handleClickGreen = () => {
    setOpenAlertGreen(true);
  };

  const handleClickRed = () => {
    setOpenAlertRed(true);
  };

  // cambiando el estado de la alert para cerrarla
  const handleCloseGreen = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlertGreen(false);
  };

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
            Registra tu Cuenta
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
            id="inputCreateUser"
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
            onClick={(e) => buttonSubmit(e, emailUser, passwordUser)}
          >
            Sign Up
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
              Por favor, llena los campos.
            </Alert>
          </Snackbar>
          <Snackbar
            open={openAlertGreen}
            autoHideDuration={4000}
            onClose={handleCloseGreen}
          >
            <Alert
              onClose={handleCloseGreen}
              severity="success"
              sx={{ width: "100%" }}
            >
              ¡Ya estas Registrado!
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
            ¿Ya tienes una Cuenta?
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
export default UserRegister;
