import React, { useEffect, useState } from "react";
import { bodySearch, headers } from "./tokens.jsx";
import IconStart from "@mui/icons-material/StarOutline";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material/";

const ListRepositories = () => {
  const [info, setInfo] = useState([]);

  const dataReposFavorites = window.localStorage.getItem("setFavorite");
  let parsedReposFavorites;

  if (!dataReposFavorites) {
    window.localStorage.setItem("setFavorite", JSON.stringify([]));
    parsedReposFavorites = [];
  } else {
    parsedReposFavorites = JSON.parse(dataReposFavorites);
  }

  const saveFavorites = (newFavorite) => {
    const transformingFavorites = JSON.stringify(newFavorite);
    window.localStorage.setItem("setFavorite", transformingFavorites);
    setStarFavorite(newFavorite);
  };

  const handleFavorite = (e, id) => {
    e.preventDefault();
    const newFavorite = [...starFavorite];
    newFavorite.push(id);
    saveFavorites(newFavorite);
  };

  const [starFavorite, setStarFavorite] = useState(parsedReposFavorites);

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

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ fontSize: "24px", fontWeight: "600" }}
            >
              Marcar Favorito
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "24px", fontWeight: "600" }}
            >
              Repositorio
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "24px", fontWeight: "600" }}
            >
              Descripción
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((dato) => (
            <TableRow
              key={dato.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <IconStart
                  sx={{ width: 40, height: 40 }}
                  id={dato.id}
                  onClick={(e) => handleFavorite(e, dato.id)}
                />
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "20px" }}>
                {dato.name}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "20px" }}>
                {dato.description
                  ? dato.description
                  : " Este Repositorio no posee descripción"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListRepositories;
