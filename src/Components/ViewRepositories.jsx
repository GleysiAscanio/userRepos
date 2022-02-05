import React from "react";
import { Container, Typography, Box } from "@mui/material/";
import ListRepositories from "./ListRepositories.jsx";
import HeaderNavegation from "./HeaderNavegation.jsx";

const ViewRepositories = () => {
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
          Tus Repositorios
        </Typography>
      </Box>
      <ListRepositories />
    </Container>
  );
};

export default ViewRepositories;
