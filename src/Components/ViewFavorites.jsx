import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material/";
import StarIcon from "@mui/icons-material/Star";
import HeaderNavegation from "./HeaderNavegation.jsx";
import { bodySearch, headers } from "./tokens.jsx";

const ViewFavorites = () => {
  const [info, setInfo] = useState([]);

  const dataReposFavorites = window.localStorage.getItem("setFavorite");
  let parsedReposFavorites;

  if (!dataReposFavorites) {
    window.localStorage.setItem("setFavorite", JSON.stringify([]));
    parsedReposFavorites = [];
  } else {
    parsedReposFavorites = JSON.parse(dataReposFavorites);
  }

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

  const newInfo = info.filter((repo) => {
    const idRepository = repo.id;
    if (parsedReposFavorites.includes(idRepository)) {
      return repo;
    } else {
      return "";
    }
  });

  return (
    <Container
      sx={{
        marginBottom: 10,
      }}
    >
      <HeaderNavegation />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 5,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            marginTop: 10,
          }}
        >
          Tus Favoritos
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "background.paper",
            fontSize: "32px",
          }}
          aria-label="contacts"
        >
          <ListItemIcon sx={{ marginBottom: 3 }}>
            <StarIcon style={{ color: "yellow", width: 50, height: 50 }} />
            <StarIcon style={{ color: "yellow", width: 50, height: 50 }} />
            <StarIcon style={{ color: "yellow", width: 50, height: 50 }} />
          </ListItemIcon>
          {newInfo.map((dato) => (
            <ListItem
              disablePadding
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 400,
                height: 50,
                marginTop: 3,
              }}
              key={dato.id}
            >
              <Typography variant="p" gutterBottom>
                {dato.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ViewFavorites;
