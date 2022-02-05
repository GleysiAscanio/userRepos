import React from "react";
import { Container, Typography, Box } from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";
import ListRepositories from "./ListRepositories.jsx";

const ViewRepositories = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 5,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            marginTop: 10,
          }}
        >
          Tus Repositorios
          <GitHubIcon sx={{ width: 70, height: 70, marginLeft: 10 }} />
        </Typography>
      </Box>
      <ListRepositories />
    </Container>
  );
};

export default ViewRepositories;
