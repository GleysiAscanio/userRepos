import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Paper, Container, Box, Button } from "@mui/material/";
import HeaderNavegation from "./HeaderNavegation.jsx";

const valueLocalUser = window.localStorage.getItem("setUserName");
const valueLocalToken = window.localStorage.getItem("setPasswordUser");

const bodySearch = {
  query: `
              query { 
                  user(login: "${valueLocalUser}"){
                    repositories(last:10, orderBy: {field: CREATED_AT, direction:ASC}){
                      nodes{
                        id,
                        name,
                        description,
                      }
                    }
                  }
                }`,
};
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + valueLocalToken,
};

const WelcomeUser = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const peticion = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(bodySearch),
        });
        const datos = await peticion.json();
        const trueData = datos.data.user.repositories.nodes;
        setInfo(trueData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const buttonLogout = (e) => {
    e.preventDefault();
    navigate("/");
  };

  if (info.length === 0) {
    return (
      <Container>
        <HeaderNavegation />
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 5,
            border: "1px solid red",
          }}
          elevation={3}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                marginTop: 10,
              }}
            >
              Bienvenidx {info}
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                marginTop: 10,
              }}
            >
              Tuvimos un problema. Posiblemente tu Usuario o tu Token no sean
              válidos. Por favor verifica y realiza de nuevo tu registro.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                marginTop: 10,
                width: "200px",
                fontSize: "24px",
              }}
              onClick={buttonLogout}
            >
              Log Out
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  } else {
    return (
      <Container>
        <HeaderNavegation />

        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 5,
          }}
          elevation={3}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                marginTop: 10,
              }}
            >
              Bienvenidx {valueLocalUser}
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                marginTop: 10,
              }}
            >
              Elige una opción para consultar, en la parte superior.
            </Typography>
          </Box>
        </Paper>
      </Container>
    );
  }
};

export default WelcomeUser;
