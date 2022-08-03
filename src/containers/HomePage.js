import { Container } from "@mui/material";
import React from "react";
import CarouselBox from "../components/Carousel";
import HeroBanner from "../components/HeroBanner";
import {
  Alert,
  AlertTitle,
} from "@mui/material";
import useHooks  from "../services/ApiHooks";
import Banner from "../components/Banner";

const HomePage = () => {
  const keyLength = "?limit=5";

  //const navigate = useNavigate();
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
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      </Container>
    );
  }

  console.log(response.results);
  
    return (
      <>
        {/* <Container> */}
          <Banner />
          <Container>
          <CarouselBox>
            {response.results.map((data) => (
              <HeroBanner key={data.key} data={data} />
            ))} 
          </CarouselBox>  
          </Container>
            
        {/* </Container> */}
      </>
    );
  };
  
  export default HomePage;




// import React from "react";
// import CarouselBox from "../components/Carousel";
// import HeroBanner from "../components/HeroBanner";
// import MovieList from "../components/MovieList";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// import {
//   useGetPopularQuery,
//   useGetTopRatedQuery,
//   useGetTrendingQuery,
//   useGetUpcomingQuery,
// } from "../services/ApiSlice";

// const HomePage = () => {
//   const { data: trendingAllsData } = useGetTrendingQuery({ media_type: "all" });
//   const { data: popularMoviesData } = useGetPopularQuery({
//     media_type: "movie",
//   });
//   const { data: popularSeriesData } = useGetPopularQuery({ media_type: "tv" });
//   const { data: upcomingMoviesData } = useGetUpcomingQuery({
//     media_type: "movie",
//   });
//   const { data: topRatedSeriesData } = useGetTopRatedQuery({
//     media_type: "tv",
//   });

//   return (
//     <>
//       {/* <Navbar></Navbar> */}
//       <section style={{ margin: "5rem 3rem 0" }}>
//         <CarouselBox>
//           {trendingAllsData?.results?.map((data, i) => (
//             <HeroBanner key={i} data={data} />
//           ))}
//         </CarouselBox>
//       </section>
//       <section style={{ margin: "3rem 3rem 0" }}>
//         <MovieList
//           categoryName="Popular Movies"
//           data={popularMoviesData?.results}
//         ></MovieList>
//       </section>
//       <section style={{ margin: "3rem 3rem 0" }}>
//         <MovieList
//           categoryName="TV Seasons / Series"
//           data={popularSeriesData?.results}
//         ></MovieList>
//       </section>
//       <section style={{ margin: "3rem 3rem 0" }}>
//         <MovieList
//           categoryName="Top Rated TV Seasons / Series"
//           data={topRatedSeriesData?.results}
//         ></MovieList>
//       </section>
//       <section style={{ margin: "3rem 3rem 0" }}>
//         <MovieList
//           categoryName="Upcoming Movies"
//           data={upcomingMoviesData?.results}
//         ></MovieList>
//       </section>
//       {/* <Footer></Footer> */}
//     </>
//   );
// }
// export default HomePage