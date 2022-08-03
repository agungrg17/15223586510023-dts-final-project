import { Box } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import { Container } from '@mui/material';
import React from "react";
import RecipeCard from "./RecipeCard";

const SearchResult = ({ result, loading }) => {
    if (loading) {
        return (
          <>
            <Container
            sx={{
              paddingY: 5,
              marginTop: 25,
              position: "relative"
            }}
          >
            <Alert severity="error">
              <AlertTitle>Sedang Memuat Data</AlertTitle>
            </Alert>
          </Container>
          </>
          );
        }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {result.map((item) => (
          <RecipeCard key={item.key} data={item} />
        ))}
      </Box>
    </>
  );
};

export default SearchResult;