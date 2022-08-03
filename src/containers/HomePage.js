import { Container } from "@mui/material";
import React from "react";
import CarouselBox from "../components/Carousel";
import HeroBanner from "../components/HeroBanner";
import { Alert, AlertTitle } from "@mui/material";
import useHooks  from "../services/ApiHooks";
import Banner from "../components/Banner";
import RecipeList from "../components/RecipeList";

const HomePage = () => {
  const keyLength = "?limit=5";

  const { response, loading, error } = useHooks(`/recipes-length/${keyLength}`);

  if (loading) {
    return (
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
    )
  }

  if (error) {
    return (
      <Container
        sx={{
          paddingY: 5,
          marginTop: 25,
          position: "relative"
        }}
      >
        <Alert severity="error">
          <AlertTitle>Fetching Data Error</AlertTitle>
          {error.message}
        </Alert>
      </Container>
    );
  }
  
    return (
      <>
        <Banner />
        <Container>
        <CarouselBox>
          {response.results.map((data) => (
            <HeroBanner key={data.key} data={data} />
          ))} 
        </CarouselBox>  
        <RecipeList />
        </Container>
      </>
    );
  };
  
  export default HomePage;
