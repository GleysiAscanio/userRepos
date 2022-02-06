import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material/";

const valueLocalUser = window.localStorage.getItem("setUserName");
const valueLocalToken = window.localStorage.getItem("setPasswordUser");

console.log(valueLocalUser, valueLocalToken);

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

const ListRepositories = () => {
  const [info, setInfo] = useState([]);

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
              sx={{ fontSize: "26px", fontWeight: "600" }}
            >
              Repositorio
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "26px", fontWeight: "600" }}
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
