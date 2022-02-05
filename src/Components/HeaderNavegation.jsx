import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, TextField } from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";

const HeaderNavegation = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
    console.log("¿intentas buscar algo?", searchValue);
  };

  return (
    <AppBar
      position="static"
      style={{
        display: "flex",
        backgroundColor: "#FFFFFF",
        height: "11vh",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "space-around",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          backgroundColor: "#FFFFFF",
          height: "11vh",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "space-around",
        }}
      >
        <GitHubIcon sx={{ width: 50, height: 50, color: "black" }} />
        <Typography
          component={Link}
          to={"/view-repositories"}
          sx={{ color: "black", fontSize: 22, textDecoration: "none" }}
        >
          Todos Tus Repositorios
        </Typography>
        <Typography
          sx={{ color: "black", fontSize: 22, textDecoration: "none" }}
          component={Link}
          to={"/view-favorites"}
        >
          Tus Repositorios Favoritos
        </Typography>
        <TextField
          sx={{
            backgroundColor: "#ffffff",
            fontSize: 22,
            width: 300,
          }}
          id="filled-search"
          value={searchValue}
          onChange={handleInputSearch}
          label="Buscar Repositorio"
          type="search"
          variant="filled"
        />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavegation;
