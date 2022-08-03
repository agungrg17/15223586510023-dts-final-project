import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Stack,
    Typography,
  } from "@mui/material";
  import { Container } from '@mui/material';
  import React from "react";
  import useHooks  from "../services/ApiHooks.js";
  import RecipeCard from "./RecipeCard";
  
  const RecipeList = () => {
    const { response, loading, error, fetchData } = useHooks(
      "/recipes"
    );
  
    const handleRefreshData = () => {
      fetchData(`/recipes`);
    };
  
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
  
    if (error) {
      return (
        <Alert severity="error">
          <AlertTitle>Fetching Data Error</AlertTitle>
          {error.message}
        </Alert>
      );
    }
  
    return (
      <>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: 1,
            marginBottom: 5,
          }}
        >
           <Button
            onClick={handleRefreshData}
            variant="contained"
            color="primary"
            sx={{
              boxShadow: "none",
              textTransform: "none",
              height: "80px",
              paddingX: 5,
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              Ragam Resep 
            </Typography>
          </Button>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {response.results.map((data) => (
            <RecipeCard key={data.key} data={data} />
          ))}
        </Box>
      </>
    );
  };
  
  export default RecipeList;