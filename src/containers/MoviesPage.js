import React from "react";
import CarouselBox from "../components/Carousel";
import HeroBanner from "../components/HeroBanner";
import MovieList from "../components/MovieList";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import {
  useGetLatestQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetUpcomingQuery,
} from "../services/ApiSlice";
import { Typography } from "@mui/material";

const Moviespage = () => {

  const { data: trendingAllsData } = useGetTrendingQuery({
    media_type: "movie",
  });
  const { data: latestMoviesData } = useGetLatestQuery({
    media_type: "movie",
  });
  const { data: popularMoviesData } = useGetPopularQuery({
    media_type: "movie",
  });
  const { data: topRatedMoviesData } = useGetTopRatedQuery({
    media_type: "movie",
  });
  const { data: upcomingMoviesData } = useGetUpcomingQuery({
    media_type: "movie",
  });

  return (
    <>
      {/* <Navbar></Navbar> */}
      <section style={{ margin: "5rem 3rem 0" }}>
        <Typography
          variant="h4"
          color="white"
          sx={{ fontWeight: "500", mb: "1rem" }}
        >
          Movies
        </Typography>
        <CarouselBox>
          {trendingAllsData?.results?.map((data, i) => (
            <HeroBanner key={i} data={data} />
          ))}
        </CarouselBox>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Popular"
          data={popularMoviesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Top Rated"
          data={topRatedMoviesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Latest"
          data={latestMoviesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Upcoming"
          data={upcomingMoviesData?.results}
        ></MovieList>
      </section>
      {/* <Footer></Footer> */}
    </>
  );
}
export default Moviespage;
