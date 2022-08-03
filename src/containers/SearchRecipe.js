import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  TextField
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import recipesApi from "../apis/RecipesApi";
import SearchResult from "../components/SearchResult";

const SearchRecipe = () => {
  const [query, setQuery] = useState("");
  const [searchRecipe, setSearchRecipe] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  const searchData = async (params) => {
    setError("");
    setloading(true);
    try {
      const result = await recipesApi.get(params);
      setSearchRecipe(result.data.results);
      setloading(false);
      if (result.data.results.length === 0) {
        setError({
          message: "Data tidak ditemukan",
        });
      }
    } catch (error) {
      setError(error);
      setloading(false);
    }
  };

  const submitHandler = () => {
    if (query === "") {
      setError({ message: "Isi kat pencarian" });
    } else {
      searchData(`/search/?q=${query}`);
    }
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            height: "40vh",
            padding: 5,
            borderRadius: "30px",
            background: "#f6dbf3",
            marginTop: 15,
            marginBottom: 5
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h4" fontWeight={600}>
              Cari Resep Favoritmu
            </Typography>
            <Stack spacing={2} direction="row">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                <TextField
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                    }}
                    size="large"
                    sx={{
                      width: "100%",
                      backgroundColor: "rgb(238, 238, 238)",
                      borderRadius: "30px"
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Button
                    onClick={submitHandler}
                    sx={{
                      height: "100%",
                      textTransform: "none",
                      background: "rgb(238, 238, 238)"
                    }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Box>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error.message}
          </Alert>
        )}
        <SearchResult result={searchRecipe} loading={loading} />
      </Container>
    </>
  );
};

export default SearchRecipe;